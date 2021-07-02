const CocktailsDAO = require("../dao/cocktailsDAO.js")

module.exports = class CocktailsController{

    //Get all Cocktails from the Server
    static async apiGetCocktails(req, res, next) {
        const cocktails = await CocktailsDAO.getCocktails()
        res.json(cocktails)
    }
}