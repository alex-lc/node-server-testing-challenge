const express = require('express');

const Posts = require('./model.js');

const router = express.Router();

/* endpoints */

// get list of posts
router.get('/', (req, res) => {
    Posts.get()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(404).json({ error: 'The list of posts could not be found.' });
        })
});

// post a new post
router.post('/', (req, res) => {

    const newPost = req.body;

    Posts.post(newPost)
        .then(post => {
            console.log(post);
            res.status(201).json({ id: post[0], ...newPost });
        })
        .catch(err => {
            res.status(400).json({ error: 'We had some trouble creating that post.' });
        })
});

// delete a post
router.delete('/:id', (req, res) => {

    const { id } = req.params;
    Posts.deletePost(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(err => {
            res.status(400).json({ error: 'Post was unable to be deleted.' });
        })
});

module.exports = router;