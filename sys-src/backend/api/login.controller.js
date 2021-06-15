import bcrypt from 'bcrypt';
import mongodb from 'mongodb';
const ObjectID = mongodb.ObjectID;
import Database from '../database/database.js';

export default class LoginController{

    static async login(req, res) {
        let usr = req.body.username;
        let password = req.body.password;

        //Find the users pw-hash
        const db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);
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
        if (req.params.id != null) {
            const db = new Database(process.env.MONGODB_URI, process.env.COCKTAILS_DB_NS);
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
        console.log("Logging out user:", userid);
    }
}