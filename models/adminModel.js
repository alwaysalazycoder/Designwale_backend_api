const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const  validator  = require('validator');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: validator.isEmail,
        required: true,
    },
    password: {
        type: String,
        select : false,
    },
    role : {
        type : String,
        default : "admin"
    }
});



// jwt token
adminSchema.methods.getJWTToken = function () { // here we are making the methods
    return jwt.sign({ id: this._id },process.env.JWT_SECRET, { // here we are making the token using the id as payload
        expiresIn: "28d",
    })
}
// compare password
adminSchema.methods.comparePassword = async function (enteredPassword) {
    if (enteredPassword === this.password) {
        return true;
    }
    return false;
}

const Admin = new mongoose.model("Admin", adminSchema);
module.exports = Admin;