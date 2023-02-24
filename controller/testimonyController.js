const Testimonial = require("../models/testimonials");

exports.uploadTestimony = async (req, res, next) => {

    const { name, designation, description } = req.body;

    const testimony = await Testimonial.create({
        name, designation, description
    });

    if (!testimony) {
        res.status(400).json({
            success: false,
            message: "Fatal error occured while uploading testimony.."
        })
    };

    res.status(200).json({
        success: true,
        testimony: testimony,
        message: "Uploaded successfully...",

    })
}
exports.getTestimony = async (req,res,next) =>{
    const testimonies = await Testimonial.find({});
    if(!testimonies){
        res.status(404).json({
            success :false,
            message : "No record found...."
        });
    }

    res.status(200).json({
        success : true,
        message : "Here are the all testimonies",
        testimonies : testimonies,
    })
}

