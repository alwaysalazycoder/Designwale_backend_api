const mongoose = require("mongoose");
const validator = require('validator');

const connectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, "Minimum length of name should be 4 character"],
        maxLength: [20, "Maximum length of name should not be more than 20 character"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    whatsapp_contact: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    feedback: {
        type: String
    }
})

const connectModel = new mongoose.model("Feedback", connectSchema);
module.exports = connectModel;