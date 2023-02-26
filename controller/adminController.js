const Admin = require("../models/adminModel");
const sendToken = require("../utils/sendToken");


exports.registerAdmin = async (req, res, next) => {

    const { name, email, password } = req.body;

    const admin = await Admin.create({
        name, email, password
    });

    if (!admin) {
        res.status(500).json({
            success: true,
            message: "Interna server error"
        })
    };

    const token = admin.getJWTToken();

    sendToken(admin,token,200, res);
}

exports.loginAdmin = async(req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return next(res.status(400).json({
            success : false,
            message : "Please enter correct email or password"
        }))
    }

    const users =  await Admin.findOne({
        email : email
    }).select("+password");

    if(!users){
        return next(
            res.status(400).json({
                success : false,
                message : "User not found"
            })
        )
    }

    const isPasswordMatched = users.comparePassword(password);
    console.log("password matched");
    if(!isPasswordMatched){
        return next(
            res.status(400).json({
                success : false,
                message : "Invalid password"
            })
        )
    }

    const token = users.getJWTToken();
    sendToken(users,token,200,res);

}
