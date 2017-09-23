const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mustache = require("mustache-express")
const session = require("express-session")
const MongoClient = require("mongodb")
const mongoose = require("mongoose")
const mongooseSession = require("mongoose-session")
mongoose.Promise = require("bluebird")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

var sess = {
  secret: "keyboard cat",
  cookie: {},
  saveUninitialized: true,
  resave: true,
  store: mongooseSession(mongoose)
}
app.use(session(sess))


const dbURL = "mongodb://127.0.0.1:27017/statstracker"
mongoose.connect(dbURL)

const mainRoute = require("./routes/mainRoute")
app.use(mainRoute)

const login = require("./routes/login")
app.use(login)

const register = require("./routes/register")
app.use(register)

app.listen(3000, function (req, res){
  console.log("Live and tracking Stats!");
})
