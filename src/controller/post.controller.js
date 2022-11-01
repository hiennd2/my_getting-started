const Post = require('../model/Post')
const redisConnection = require('../connections/redis')
const clientRedis = redisConnection.client
const axios = require('axios')

exports.newPost = async (req, res) => {
    try {
        const payload = Object.assign({}, req.body)

        const post = new Post()
        post.title = "test_title"
        post.content = "test_content"
        // dieu kien de luu

        // luu vao database
        await post.save()
        await clientRedis.hSet('post:4:number', 'title3', 'test_content')
        console.log('redis error')
        console.log('Create Post Success')
        res.json(post)
    } catch (error) {
        console.log('Creat Post Fail')
    }
}

exports.getPost = async (req, res) => {
    try {
        
    } catch (error) {
        console.log('get post error')
    }
}


exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log('Get Posts Success')


        // await axios('https://jsonplaceholder.typicode.com/posts')
        //     .then((res) => res.data)
        //     .then((posts) => {
        //         posts.map(async (post) => {
        //             let pos1t = new Post({
        //                 userId: post.userId.toString(),
        //                 title: post.title.toString(),
        //                 body: post.body.toString()
        //             })
        //             await pos1t.save()
        //         })

        //     })


        await clientRedis.hGetAll('post')
        res.json(posts)
    } catch (error) {
        console.log('Get Post Fail')
        console.log(error)
    }
}

exports.createPost = async (req, res) => {
    try {
        let tags = ["tag2", "tag4", "tag5"]
        const post = new Post ({
            title: "Title 3",
            content: "This is post 3",
            tags: tags
        })

        await post.save()
        res.json('Create Post Success!')
    } catch (error) {
        console.log('Create Post fail: ', error)
    }
}

exports.findPost = async (req, res) => {
    try {
        const tag = 'tag5'
        const posts =  await Post.find({ "tags": tag})
        res.json(posts)
    } catch (error) {
        console.log('Find Error')
    }
}