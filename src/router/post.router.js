const express = require('express')
const router = express.Router()

const postController = require('../controller/post.controller')

router.get('/', postController.newPost)
router.get('/posts', postController.getPosts)

module.exports = router