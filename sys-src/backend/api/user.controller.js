import bcrypt from 'bcrypt';
import mongodb from 'mongodb';
const ObjectID = mongodb.ObjectID;
import Database from '../database/database.js';

export default class UserController{

    static async getFavouriteCocktails(req, res) {
        let userid = req.params.id;

        //Find the users pw-hash
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
                        console.log(cocktail);
                        return await db.find("Recipes", { _id : ObjectID(cocktail) });
                    })
                )
                .then (cocktails => {
                    res.json({
                        success: true,
                        cocktails: cocktails,
                    })
                })

                // data[0].favourites.forEach(cocktail => {
                //     db.find("Recipes", { _id : ObjectID(cocktail) })
                //     .then (data => {
                //         cocktails.push(data);
                //     })
                //     .catch (error => {
                //         res.json({
                //             success: false,
                //             msg: 'Fehler beim Zugriff auf die Datenbank'
                //         })
                //     })
                // });
            }
        })
        .catch(error => res.json({
            success: false,
            msg: 'Fehler beim Zugriff auf die Datenbank:' + error.message
        }))
    }
}