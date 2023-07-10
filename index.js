const express = require("express");
const app = express();
const { connection } = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoute = require("./Routes/movieRoute");
//const { Connection } = require("mongoose");

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );

// Connecting to database


// creating an api and seperating it.
app.get("/", async (req, res) => {
    res.send("🙏");
})
app.use("/api", bookingRoute);

// listening backend on a port.
const port = process.env.PORT || 8080;
app.listen( port, () => console.log(`App listening on port ${port}!`) );

module.exports = app;
