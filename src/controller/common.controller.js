const Post = require('../model/Post')
const Tag = require('../model/Tag')

const postService = require('../services/post.services')

exports.findPostsOrTags = async (req, res) => {
    try {
        const id = req.params.id
        console.log("id: ", id)
        const isPost = req.query.isPost
        if (isPost) {
            await postService.findPost(id)
            const post = await Post.findOne({id: id})
            const tagsInPost = post.tags
            const tags =  await Tag.find({ id: tagsInPost}).exec()
            res.json(tags)

        } else {
            const tag = await Tag.findOne({id: id})
            const postInTag = tag.posts
            console.log("postInTag: ", postInTag)
            const posts =  await Post.find({ id: postInTag}).exec()

            res.json(posts)
        }
    } catch (error) {
        console.log('FindPostsOrTags Error: ', error)
    }
}