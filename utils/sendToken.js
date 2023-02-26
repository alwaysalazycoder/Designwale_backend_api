
const sendToken = (user,token,statusCode,res) => {

    //options for cookies
    const options = {
        expiresIn : new Date(Date.now + 5 * 24 * 60 * 60 * 1000),
        httpOnly : true,
    }

    res.status(statusCode).cookie('token',token,options).json({
        success : true,
        user : user,
        token : token
    })
}

module.exports = sendToken;