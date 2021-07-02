const CocktailsDAO = require("../dao/cocktailsDAO.js")

module.exports = class CocktailsController{
    static async apiGetCocktails(req, res, next) {
        const cocktails = await CocktailsDAO.getCocktails()
        res.json(cocktails)
    }
}