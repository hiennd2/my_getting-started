const Post = require('../model/Post')
const Tag = require('../model/Tag')

exports.findPost = async (id) => {
    const tag = await Tag.findOne({ id: id })
    const postInTag = tag.posts
    console.log("postInTag: ", postInTag)
    const posts = await Post.find({ id: postInTag }).exec()
    return posts
}