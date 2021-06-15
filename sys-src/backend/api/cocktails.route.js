import express from "express"
import CocktailsController from "./cocktails.controller.js"

const router = express.Router()

router.route("/").get(CocktailsController.apiGetCocktails)

export default router   