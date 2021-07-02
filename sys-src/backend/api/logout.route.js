const express = require("express")
const LoginController = require("./login.controller.js");

const router = express.Router()

router.route("/").post(LoginController.logout);

module.exports = router   