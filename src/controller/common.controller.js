const postService = require('../services/post.services')
const tagService = require('../services/tag.services')


exports.findPostsOrTags = async (req, res) => {
    try {
        const id = req.params.id
        const isPost = req.query.isPost

        if (isPost) {
            const tags = await postService.findTag(id)
            res.json(tags)
        } else {
            const posts = await tagService.findPost(id)
            res.json(posts)
        }

    } catch (error) {
        console.log('FindPostsOrTags Error: ', error)
    }
}