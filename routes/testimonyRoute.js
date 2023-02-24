const express = require('express');
const { uploadTestimony, getTestimony } = require('../controller/testimonyController');
const router = express.Router();

router.route("/upload/testimony").post(uploadTestimony);
router.route("/get/allTestimonies").get(getTestimony);

module.exports = router;