const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const User = require("../models/Users")

router.get("/login", function(req,res){
  res.render("login")
})

module.exports = router
