const jwt = require('jsonwebtoken');
const Admin = require("../models/adminModel");

exports.isAuthenticated = async(req,res,next) =>{
    const token = req.cookies;

    if(!token){
        return next(res.status(404).json({
            success :false,
            message : "please login to access this resource..."
        }))
    }

    const decodeData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await Admin.findById(decodeData._id);

    next();
};

exports.isAuthorisedRole = ()=>{
    return (req,res,next)=>{

        console.log(req.user.role);
        
        if(req.user.role != "admin"){
            return next(res.status(404).json({success : false,message : "Not allowed to access this resource"}))
        }

        next();
    }

}