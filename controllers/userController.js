const passport = require('passport');
const User = require('../models/User');


exports.register = (req,res) => {
    res.render('register',{
    title: 'Register', 
    warning: '',
    user: req.user,})
}

exports.registerUser = (req, res) => {
    const newUser = new User({username: req.body.username}); 
   
    User.register(newUser, req.body.password, (err, account) => {
        if(err) {
            return res.render('register', {
                title: 'Register',
                warning: 'That username is not available'
            });
        }
        res.redirect('/login'); 
    });
}

exports.login = (req,res) => {
    const messages = req.session.messages || []
    res.render('login',{
    title: 'Login', 
    messages,
    user: req.user, })
}