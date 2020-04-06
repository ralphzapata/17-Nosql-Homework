// Variables
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Express App using port 8000
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

//  Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});