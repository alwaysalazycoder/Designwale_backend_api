const express = require('express');
const { registerAdmin, loginAdmin, logOut } = require('../controller/adminController');
const {isAuthenticated ,isAuthorisedRole} = require('../middleware/auth');


const router = express.Router();
router.route("/admin/register").post(registerAdmin);
router.route("/admin/login").post(loginAdmin);
router.route("/admin/logout").get(logOut)

module.exports = router;

