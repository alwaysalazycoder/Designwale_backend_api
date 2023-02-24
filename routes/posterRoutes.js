const express = require('express');
const { postPoster } = require('../controller/posterController');
const {postReel} = require("../controller/reelController");

const router = express.Router();

router.route("/post/posters/").post(postPoster);
router.route("/post/reels/").post(postReel);

module.exports = router;