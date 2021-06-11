import express from "express"
import UserController from "./user.controller.js";

const router = express.Router()

router.route("/:id/favourites").get(UserController.getFavouriteCocktails)

export default router   