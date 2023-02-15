const express = require("express");
const { register, login } = require("../controllers/user");

const router = express.Router();

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post("/register", register);

// @route   POST api/users/login
// @desc    Login user / Returning JWT Token
// @access  Public

router.post("/login", login);

module.exports = router;
