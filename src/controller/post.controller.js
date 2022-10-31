const Post = require('../model/Post')

exports.newPost = async (req, res) => {
    try {
        const post = new Post()
        post.title = "test_title"
        post.content = "test_content"

        // dieu kien de luu
    

        // luu vao database
        await post.save()
        console.log('Create Post Success')
        res.json(post)
    } catch (error) {
        console.log('Creat Post Fail')
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log('Get Posts Success')
        res.json(posts)
    } catch (error) {
        console.log('Get Post Fail')
    }
}
