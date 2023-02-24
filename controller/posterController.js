
const Poster = require("../models/postModel");
const cloudinary = require('cloudinary')
exports.postPoster = async (req, res, next) => {

    const { posterTitle } = req.body;

    let myCloud;
    console.log("Body request dot " ,req.body.posterImage);
    // const file = req.files.posterImage;
    try {
        myCloud = await cloudinary.v2.uploader.upload(req.body.posterImage, {
        folder: "Designwale-images",
        resource_type:"auto",
        });
    } catch (error) {
        console.log("Error in cloudinary :" , error);
    }
   

    if (!myCloud) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }



    const poster = await Poster.create({
        poster_title : posterTitle,
        public_id: myCloud.public_id,
        public_url: myCloud.secure_url,
    });

    if (!poster) {
        console.log("Error occured while posting posters....");
    }

    res.status(200).json({
        success: true,
        message: "Poster posted to server",
        poster,
    })
}

exports.getAllPoster = async(req,res,next)=> {
    const posters = await Poster.find({});

    if(!posters){
        res.status(400).json({
            success : false,
            message : "Cannot get posters"
        })
    }

    res.status(200).json({
        success : true,
        message : "Posters fetched successfully",
        posters
    })

}