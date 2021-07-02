const bcrypt =require('bcrypt');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const Database = require('../database/database.js');

module.exports = class LoginController{

    //login the user
    static async login(req, res) {
        console.log("logged in")

        let usr = req.body.username;
        let password = req.body.password;

        //Create Database Object
        const db = new Database("mongodb+srv://Michael_MongoDB:***REMOVED***@teamblaucluster.sttqh.mongodb.net/EasyCocktail?retryWrites=true&w=majority",
            "EasyCocktail");
        db.find("Users", { username : usr })
        .then (data => {
            //check if username is found in database
            if (data && data.length === 1) {
                //compare passwords
                bcrypt.compare(password, data[0].password, (bcrypErr, verified) => {
                    //Correct Password
                    if (verified) {
                        res.json({
                            success: true,
                            id: data[0]._id,
                        })
                        return;                         
                    }
                    //Wrong Password
                    else {
                        res.json({
                            success: false,
                            msg: 'Falscher Benutzername oder Passwort'
                        })
                    }
                });
            }
            //No User found
            else {
                res.json({
                    success: false,
                    msg: 'Falscher Benutzername oder Passwort'
                })
            }
        })
        //error handling
        .catch (error => {
            res.json({
                success: false,
                msg: 'Fehler beim Zugriff auf die Datenbank'
            })
        })
    }

    //check if user is already logged in
    static async isLoggedIn(req, res, next) {
        if (req.params.id != null) {
            const db = new Database("mongodb+srv://Michael_MongoDB:***REMOVED***@teamblaucluster.sttqh.mongodb.net/EasyCocktail?retryWrites=true&w=majority",
                "EasyCocktail");
            db.find("Users", { _id : ObjectID(req.params.id) })
            .then (data => {
                //check if username is found in database
                if (data && data.length === 1) {
                    //send ok when found
                    res.json({
                        success: true,
                        username: data[0].username
                    })
                    return true;
                }
                else {
                    //send not ok when not found
                    res.json({
                        success: false,
                        msg: "Session ID not found"
                    })
                    return false;
                }
            })
            //error handling
            .catch (data => {
                res.json({
                    success: false,
                    msg: "Fehler bei Zugriff auf Datenbank"
                })
            })          
        }
    }

    //Handling logout call
    static async logout(req, res) {
        let userid = req.body.userid;

        res.json({
            success: true,
            msg: "logout successfull"
        })
    }
}