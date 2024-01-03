// src/app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const { mongoURI } = require("./config");
const dotenv = require('dotenv')
const routes = require("./routes/noteRoutes"); 
dotenv.config();

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Load routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", routes)
app.use("/api/notes",routes) 


const server = app.listen(process.env.Port, function (req, res) {
    console.log(`Server is running on Port:${process.env.port}`);
})

module.exports = server