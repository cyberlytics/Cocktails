import express from "express"
import UserController from "./user.controller.js";

const router = express.Router()

router.route("/:id/favourites").get(UserController.getFavouriteCocktails);
router.route("/:id/favouritesid").get(UserController.getFavouriteCocktailsID);
router.route("/setFavourite").post(UserController.setFavouriteCocktail);
router.route("/register").post(UserController.registerNewUser);

export default router   