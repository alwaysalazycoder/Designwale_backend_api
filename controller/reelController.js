
const Reel = require("../models/reelModel");
import cloudinary from "cloudinary";

exports.postReel = async(req,res,next)=>{

    const {reelTitle} = req.body;

    let myCloud;

    try{
        myCloud = await cloudinary.v2.uploader.upload(req.body.reelVideo,{
            folder : "DesignwaleReels",
            resource_type: "video",
            format: "mp4",
        })
    }
    catch(error){
        console.log("Error in uploading reels:: ",error);
    }

    if(!myCloud){
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
    const reel = await Reel.create({
        reel_title :reelTitle,
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