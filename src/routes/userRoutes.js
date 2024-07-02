const express = require('express');

const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/sign-up', userController.signUpForm);
router.post('/sign-up', userController.signUp);
router.get('/sign-in', userController.signInForm);
router.post('/sign-in', userController.signIn);
router.get('/sign-off', authMiddleware.requireLogin, userController.signOff);

module.exports = router;
