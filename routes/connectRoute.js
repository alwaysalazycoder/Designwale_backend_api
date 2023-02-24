const express = require('express');
const { postFeedbacks } = require('../controller/connectController');
const router = express.Router();

router.route("/post/feedback").post(postFeedbacks);
router.route("/").get((req,res,next)=> {
    res.status(200).json({
        success : true,
        message : "Api is working smooth and fine..."
    })
})

module.exports = router;