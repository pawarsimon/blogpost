
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Please enter your post title'
    },

    body: {
        type: String,
        required: 'Please enter your post message'
    },
});

//making the class public 
module.exports = mongoose.model('Post', postSchema);