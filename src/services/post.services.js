// check logic
// update 


// kiem tra tags trong database

// neu co
// thuc hien saver post
// update tags voi post id =
const Post = require('../model/Post')
const Tag = require('../model/Tag')

exports.findPost = async (id) => {
    const post = await Post.findOne({id: id})
    const tagsInPost = post.tags
    const tags =  await Tag.find({ id: tagsInPost}).exec()
    console.log("This is a post service")
}