const Post = require('../models/Post');

exports.homePage = (req, res) => {
    res.render('index', {
    title: 'Home',
    });
  };

exports.getBlogs = (req,res) => {
    Post.find((err, posts) => {
        if(err){
            res.render('error');
        }else {
            res.render('blogs',{
                title: 'All posts',
                posts,
            });
        }
    });
};
// exports.getBlogs = (req, res) => 
// {
//     res.render('blogs',{
//         title: 'All Posts'
//     });
// }
exports.register = (req,res) => {
    res.render('register',{
    title: 'Register'})
}

exports.login = (req,res) => {
    res.render('login',{
    title: 'Login'})
}