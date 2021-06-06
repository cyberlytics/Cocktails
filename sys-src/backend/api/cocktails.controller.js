import CocktailsDAO from "../dao/cocktailsDAO.js"

export default class CocktailsController{
    static async apiGetCocktails(req, res, next) {
        const cocktails = await CocktailsDAO.getCocktails()
        res.json(cocktails)
    }
}