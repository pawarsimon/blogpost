const passport = require('passport');
const mongoose = require('mongoose');

exports.login = passport.authenticate('local', {
    successRedirect: '/blogs',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login',
});

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    }

    res.redirect('/login');
}