const express = require('express');
const { postFeedbacks } = require('../controller/connectController');
const router = express.Router();

router.route("/post/feedback").post(postFeedbacks);

module.exports = router;