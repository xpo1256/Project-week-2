const express = require('express');
const router = express.Router();
const dataController = require("../auth/dataController");
const viewController = require('./viewController');


router.post('/', dataController.createUser, viewController.redircetToLogin)
router.get('/',viewController.signUp)
router.post('/login',dataController.loginUser,viewController.redirectHome)
router.get("/login",viewController.signIn)

module.exports = router