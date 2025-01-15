const express = require("express")
const route = express.Router()
const UserController = require("../controllers/UserController")
route.post("/registration", UserController.UserRegistration)
route.post("/login", UserController.UserLogin)
route.post("/passwordchange", UserController.changePassword)
module.exports = route;