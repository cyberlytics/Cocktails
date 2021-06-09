import express from "express"
import LoginController from "./login.controller.js";

const router = express.Router()

router.route("/").post(LoginController.logout);

export default router   