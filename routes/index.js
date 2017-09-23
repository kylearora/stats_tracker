const express = require("express")
const router = express.Router()
const User = require("../models/Users")

const requireAuth = function(req, res, next) {
  // console.log(req.session.user);
  if (req.session.user) {
    next()
  } else {
    res.redirect("/login")
  }
}

router.get("/", requireAuth, function(req, res) {
    console.log("Connected");
    User.find()
    .then(function(user){
      res.render("index", {
        users: users
      })
    })
  })






module.exports = router
