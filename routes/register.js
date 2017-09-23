const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("../models/Users")

router.get("/register", function (req, res){
  res.render("register")
})

router.post("/register", function(req, res){
  const username = req.body.username
  const passwordHash = req.body.passwordHash
  const user = new User()
  user.username = username
  user.passwordHash = bcrypt.hashSync(passwordHash, 8)
  user.save().then(function(user){
    res.redirect('/login')
  })
})


module.exports = router
