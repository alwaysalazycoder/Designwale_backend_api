const express = require('express');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');

const app = require("./app");
const connectDatabase = require('./database/connect');

// configuration path setup
dotenv.config({path:"backend/config/config.env"});

// connecting Database
connectDatabase();
console.log("ans : " ,process.env.port_no);
console.log("ans : " ,process.env.port_no);
console.log("ans : " ,process.env.port_no);


// cloudinary setup
cloudinary.config({
    cloud_name: "dzg4mxyle",
    api_key: "886917765931776",
    api_secret: "jA2UM9PRkpp4UUv_zpXKPlxXs7M",
  });


// server connection to port
let port = process.env.port_no;
const server = app.listen(port,()=>{
    console.log("Server is working smooth on port number : "+ port);
})

module.exports= app;