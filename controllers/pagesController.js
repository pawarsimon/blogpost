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
                user: req.user,
            });
        }
    });
};

exports.addPost = (req, res) => {
    res.render('createPost', {
        title: 'Create Post'
    })
}

exports.createPost = (req, res) => {
    try{
    const post = new Post(req.body);
    post.save();
    res.redirect('/blogs');
    }catch(err){
        console.log(err);
    }
}

exports.deletePost = (req, res) => {
    Post.remove({_id: req.params.id},(err) => {
        if (err) {
            console.log(err);
        }else{
            res.redirect('/blogs')
        }
    })
}


exports.editPost = (req, res) => {
    Post.findById(req.params.id, (err, games) => {
        if(err){
            console.log(err);
        }else{
            res.render('editPost', {
                title: 'Edit',
                Post,
            })
        }
    })
}

exports.updatePost = (req, res) => {
    Post.update({_id: req.params.id}, req.body, (err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/blogs');
        }
    })
}
