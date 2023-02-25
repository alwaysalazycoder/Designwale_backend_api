const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        validate : validator.validate(),
        required : true,
    },
    password : {
        type : String,
    }
});

const Admin = new mongoose.model("Admin",adminSchema);

module.exports = Admin;