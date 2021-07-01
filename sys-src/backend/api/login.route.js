const express = require("express")
const LoginController = require("./login.controller.js");

const router = express.Router()

router.route("/:id").get(LoginController.isLoggedIn);
router.route("/").post(LoginController.login);

module.exports = router   