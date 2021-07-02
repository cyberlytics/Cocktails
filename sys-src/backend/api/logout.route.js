const express = require("express")
const LoginController = require("./login.controller.js");

const router = express.Router()

//route to logout the user
router.route("/").post(LoginController.logout);

module.exports = router   