const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema({
    name:{
        type :String,
    },
    designation : {
        type :String,
        max:22,
        min:2
    },
    description : {
        type :String,
        min : 4
    }
});

const Testimonial = new mongoose.model("Testimonial",testimonySchema);
module.exports = Testimonial;