const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Routes = require('./routes/Routes')
// middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
})
//news
app.use(cors({
  origin:"*",
  credentials: true,
}));

// routes
app.use('/',Routes)

app.use(express.static('static'));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});


// dotnev
const PORT = process.env.PORT || 5000;
const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://madhvesh:madhvesh@devtemp.lz30rdg.mongodb.net/Teaching?retryWrites=true&w=majority";

// Connect Mongodb
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected MONGODB");
    app.listen(PORT, () => {
      console.log(`Listening on Port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
