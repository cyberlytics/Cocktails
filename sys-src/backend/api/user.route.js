const express = require("express")
const UserController = require("./user.controller.js");

const router = express.Router()

//Route to get the favourite Cocktails from a specific user
router.route("/:id/favourites").get(UserController.getFavouriteCocktails);

//Route to set/unset a Cocktail to the users Favorite
router.route("/setFavourite").post(UserController.setFavouriteCocktail);

//Route to register a new User
router.route("/register").post(UserController.registerNewUser);

//Route to get a list of favourite Cocktails IDs from a specific user
router.route("/:id/favouritesid").get(UserController.getFavouriteCocktailsID);

module.exports = router   