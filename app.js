const fileUpload = require("express-fileupload");
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);
app.use(cors())
app.use(fileUpload({useTempFiles: true}));
app.use(bodyParser.urlencoded({ extended: true }));





// importing routes
const feedbackRoute = require("./routes/connectRoute");
const posterRoute = require("./routes/posterRoutes");
const testimonyRoute = require("./routes/testimonyRoute");

app.use("/api/v1",feedbackRoute);
app.use("/api/v1",posterRoute);
app.use("/api/v1",posterRoute);
app.use("/api/v1",testimonyRoute);


module.exports = app;