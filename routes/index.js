var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pagesController');
var userController = require('../controllers/userController');
var authController =  require('../controllers/authController');

/* GET home page. */
router.get('/',pageController.homePage);
router.get('/blogs', authController.isLoggedIn, pageController.getBlogs);


//add post
router.post('/add', authController.isLoggedIn, pageController.createPost)
router.get('/create', pageController.addPost);
//router.post('/create', pageController.createPost);

//delete post
router.get('/blogs/delete/:id', pageController.deletePost);

router.get('/blogs/edit/:id', pageController.editPost);
router.post('/blogs/edit/:id', pageController.updatePost);

//Register and Login 
router.get('/register', userController.register);
router.post('/register', userController.registerUser);

router.get('/login', userController.login);
router.post('/login', authController.login);

//Logout
router.get('/logout', authController.isLoggedIn, (req, res) => {
    
    res.redirect('/');
   
})
module.exports = router;
