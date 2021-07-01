const express = require("express")
const CocktailsController = require("./cocktails.controller.js")

const router = express.Router()

router.route("/").get(CocktailsController.apiGetCocktails)

module.exports = router   