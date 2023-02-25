
const Reel = require("../models/reelModel");
import cloudinary from "cloudinary";

exports.postReel = async(req,res,next)=>{

    const {reel_title} = req.body;

    let myCloud;

    try{
        myCloud = await cloudinary.v2.uploader.upload(req.body.reelVideo,{
            chunk_size: 6000000,
            folder : "Designwale-reels",
            resource_type:"auto",

        })
    }
    catch(error){
        console.log("Error in uploading reels:: ",Erro);
    }

    if(!myCloud){
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
    const reel = await Reel.create({
        reel_title,
        public_id:myCloud.public_id,
        public_url:myCloud.secure_url
    });

    if(!reel){
        console.log("Error occured while posting reel....");
    }

    res.status(200).json({
        success : true,
        message : "Reel posted to server",
        reel,
    })
}