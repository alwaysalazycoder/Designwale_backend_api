
const Reel = require("../models/reelModel");
exports.postReel = async(req,res,next)=>{

    const {public_id,public_url,reel_title} = req.body;

    const reel = await Reel.create({
        reel_title,
        public_id,
        public_url
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