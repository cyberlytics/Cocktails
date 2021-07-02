const bcrypt =require('bcrypt');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const Database = require('../database/database.js');

module.exports = class LoginController{

    static async login(req, res) {
        console.log("logged in")

        let usr = req.body.username;
        let password = req.body.password;

        //Find the users pw-hash
        const db = new Database("mongodb+srv://Michael_MongoDB:bYGrn4drdZOMoH6h@teamblaucluster.sttqh.mongodb.net/EasyCocktail?retryWrites=true&w=majority",
            "EasyCocktail");
        db.find("Users", { username : usr })
        .then (data => {
            if (data && data.length === 1) {
                bcrypt.compare(password, data[0].password, (bcrypErr, verified) => {
                    //Correct Password
                    if (verified) {
                        res.json({
                            success: true,
                            username: data[0].Username,
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
        .catch (error => {
            res.json({
                success: false,
                msg: 'Fehler beim Zugriff auf die Datenbank'
            })
        })
    }

    static async isLoggedIn(req, res, next) {
        console.log("logged in")
        if (req.params.id != null) {
            const db = new Database("mongodb+srv://Michael_MongoDB:bYGrn4drdZOMoH6h@teamblaucluster.sttqh.mongodb.net/EasyCocktail?retryWrites=true&w=majority",
                "EasyCocktail");
            db.find("Users", { _id : ObjectID(req.params.id) })
            .then (data => {
                if (data && data.length === 1) {
                    res.json({
                        success: true,
                        username: data[0].Username
                    })
                    return true;
                }
                else {
                    res.json({
                        success: false,
                        msg: "Session ID not found"
                    })
                    return false;
                }
            })
            .catch (data => {
                res.json({
                    success: false,
                    msg: "Fehler bei Zugriff auf Datenbank"
                })
            })          
        }
    }

    static async logout(req, res) {
        let userid = req.body.userid;

        res.json({
            success: true,
            msg: "logout successfull"
        })
    }
}