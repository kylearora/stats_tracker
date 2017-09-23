const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("../models/Users")

router.get("/register", function (req, res){
  res.render("register")
})

router.post("/register", function(req, res){

})

module.exports = router
