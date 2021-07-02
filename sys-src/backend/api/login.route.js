const express = require("express")
const LoginController = require("./login.controller.js");

const router = express.Router()

//route to check if user is logged in
router.route("/:id").get(LoginController.isLoggedIn);

//route to login the user
router.route("/").post(LoginController.login);

module.exports = router   