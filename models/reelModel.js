const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
    reel_title : {
        type : String,
        required : true,
    },
    public_id : {
        type : String,
        required : true,
    },
    public_url : {
        type : String,
        required : true,
    }
})
const reelModel = new mongoose.model("reel",reelSchema);
module.exports = reelModel;