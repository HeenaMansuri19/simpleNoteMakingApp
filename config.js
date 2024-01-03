const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/noteApp", {
    // useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
    console.log("mongoose connection error", err);
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose connection succesfull");
});