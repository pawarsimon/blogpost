var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pagesController')

/* GET home page. */
router.get('/',pageController.homePage);
router.get('/blogs', pageController.getBlogs);
router.get('/register', pageController.register);
router.get('/login',pageController.login);


module.exports = router;
