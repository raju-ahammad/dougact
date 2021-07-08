const router = require('express').Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = require('../controllers/userController')

router.post('/register', userController.registerUser)
router.post("/login", userController.loginUser)

module.exports = router;
