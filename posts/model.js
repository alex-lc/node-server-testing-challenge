const db = require('../database/connection');

module.exports = {
    get,
    post,
    deletePost
}

function get() {
    return db('posts');
}

function post(post) {
    return db('posts').insert(post, 'id');
}

function deletePost(id) {
    return db('posts')
        .where({ id })
        .del()
}