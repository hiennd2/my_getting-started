const express = require('express')
const router = express.Router()

const commonController = require('../controller/common.controller')

router.get('/:id', commonController.findPostsOrTags)

module.exports = router