const express = require('express')
const router = express.Router()

const postController = require('../controller/post.controller')

router.get('/', postController.newPost)
router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)
router.get('/find', postController.findPost)

module.exports = router