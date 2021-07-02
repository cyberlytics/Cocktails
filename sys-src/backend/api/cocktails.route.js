const express = require("express")
const CocktailsController = require("./cocktails.controller.js")

const router = express.Router()

//Route to get all Cocktails from the Server
router.route("/").get(CocktailsController.apiGetCocktails)

module.exports = router   