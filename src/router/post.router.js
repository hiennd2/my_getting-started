const express = require('express')
const router = express.Router()

const postController = require('../controller/post.controller')
const commonController = require('../controller/common.controller')

router.get('/', postController.newPost)
router.get('/posts', postController.getPosts)
router.get('/posts/:id', commonController.findPostsOrTags)
router.post('/posts', postController.createPost)
router.get('/find', postController.findPost)

module.exports = router