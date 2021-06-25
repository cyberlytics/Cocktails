import bcrypt from 'bcrypt';
import mongodb from 'mongodb';
const ObjectID = mongodb.ObjectID;
import Database from '../database/database.js';

export default class UserController{

    static async getFavouriteCocktails(req, res) {
        let userid = req.params.id;

        //Find the users object-id
        const db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);
               
        db.find("Users", { _id: ObjectID(userid) })
        .then (data => {
            if (data && data.length === 0) {
                res.json({
                    success: false,
                    msg: 'No user with given id found'
                })
            }


            else {
                Promise.all(
                    data[0].favourites.map(async (cocktail) => {
                        return await db.find("Recipes", { _id : ObjectID(cocktail) });
                    })
                )
                .then (cocktails => {
                    res.json({
                        success: true,
                        cocktails: cocktails.flat(),
                    })
                })
            }
        })
        .catch(error => res.json({
            success: false,
            msg: 'Fehler beim Zugriff auf die Datenbank:' + error.message
        }))
    }

    static async setFavouriteCocktail(req, res) {
        let userid = req.body.userid;
        let cocktailid = req.body.cocktail;

        const db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);
        //Check if user exists
        db.find("Users", { _id: ObjectID(userid) })
        .then (data => {
            if (data && data.length === 0) {
                res.json({
                    success: false,
                    msg: 'No user with given id found'
                })
            }
            else {
                //If user already has favourited the cocktail: remove it
                if (data[0].favourites.some(item => item == cocktailid)) {
                    let newfavs = data[0].favourites.filter(item => item != cocktailid);
                    db.update("Users", { _id: ObjectID(userid)}, { favourites : newfavs})
                    .then(res => {
                        console.log("Update");
                    })
                    .catch(err => {
                        console.log(err.message);
                    })                  
                }
                //If user hasn't favourited the cocktail: add it
                else {
                    let tmp = data[0].favourites;
                    tmp.push(ObjectID(cocktailid));
                    db.update("Users", { _id: ObjectID(userid)}, { favourites : tmp})
                    .then(res => {
                        console.log("Update");
                    })
                    .catch(err => {
                        console.log(err.message);
                    })    
                }
            }})
        .catch(error => res.json({
            success: false,
            msg: 'Fehler beim Zugriff auf die Datenbank:' + error.message
        }))
    }

    static async registerNewUser(req, res) {
        let usr = req.body.username;
        let password = req.body.password;
        let passwordValidation = req.body.passwordValidation;

        if (password !== passwordValidation) {
            res.json({
                success: false,
                msg: 'Passwörter stimmen nicht überein'
            })
            return;
        }
        if (password.length <= 8) {
            res.json({
                success: false,
                msg: 'Passwort muss mindestens 8 Zeichen lang sein'
            })
            return;
        }
        //At least two numbers
        var regex = new RegExp("[0-9]");
        if (!regex.test(password)) {
            res.json({
                success: false,
                msg: 'Passwort muss mindestens eine Ziffer und ein Sonderzeichen enthalten'
            })
            return;
        }
        //At least one special character
        regex = new RegExp("[$&+,:;=?@#|'<>.^*()%!-]");
        if (!regex.test(password)) {
            console.log("sonderzeichen");
            res.json({
                success: false,
                msg: 'Passwort muss mindestens eine Ziffer und ein Sonderzeichen enthalten'
            })
            return;
        }
        let pwhash = bcrypt.hashSync(password, 9);

        const db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);

        db.find("Users", { username : usr})
        .then(data => {
            if (data && data.length !== 0) {
                res.json({
                    success: false,
                    msg: 'Benutzer existiert bereits'
                })
                return;
            }
            else {
                db.insert("Users", { username: usr, password: pwhash, status: "user", favourites : []})
                .then(data => {
                    res.json({
                        success: true,
                    })
                })
                .catch(error => {
                    res.json({
                        success: false,
                        msg: "Fehler beim Zugriff auf die Datenbank"
                    })
                })
            }
        })
        .catch(error => {
            res.json({
                success: false,
                msg: "Fehler beim Zugriff auf die Datenbank"
            })
        })
    }
}