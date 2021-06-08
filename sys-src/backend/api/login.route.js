import express from "express"
import LoginController from "./login.controller.js";

const router = express.Router()

router.route("/:id").get(LoginController.isLoggedIn);
router.route("/").post(LoginController.login);

export default router   