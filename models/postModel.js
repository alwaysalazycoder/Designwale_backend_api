const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
    poster_title : {
        type : String,
        required : true,
    },
    public_id : {
        type : String,
    },
    public_url : {
        type : String,
    }
})
const posterModel = new mongoose.model("poster",posterSchema);
module.exports = posterModel;