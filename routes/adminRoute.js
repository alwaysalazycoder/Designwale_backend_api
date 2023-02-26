const express = require('express');
const { registerAdmin, loginAdmin } = require('../controller/adminController');
const {isAuthenticated ,isAuthorisedRole} = require('../middleware/auth');


const router = express.Router();
//isAuthenticated,isAuthorisedRole("admin")
router.route("/admin/register").post(registerAdmin);
router.route("/admin/login").post(loginAdmin);

module.exports = router;