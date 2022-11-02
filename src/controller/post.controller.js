const Post = require('../model/Post')
const redisConnection = require('../connections/redis')
const clientRedis = redisConnection.client
const axios = require('axios')
const Tag = require('../model/Tag')
const testService = require('../services/test')

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
        res.json('This is getPost')
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
        const newPost = req.body

        if (!newPost.title || !newPost.content) {
            res.json("Title or content is empty!")
            return;
        }

        const post = new Post ({
            id: newPost.id,
            title: newPost.title,
            content: newPost.content,
            tags: newPost.tags || ["other"]
        })

        res.json('Create Post Success!')
    } catch (error) {
        console.log('Create Post fail: ', error)
    }
}

exports.findPost = async (req, res) => {
    try {
        const query = req.query
        const tags = query.tags
        const subtitle = query.subTitle
        console.log("typeof tags: ", typeof tags)
        console.log(tags)
        const posts =  await Post.find({ $text: { $search: `${subtitle} ${tags}`}}).exec()
        res.json(posts)
    } catch (error) {
        console.log('Find Error: ', error)
    }
}


exports.test = (req, res) => {
    const id = req.params.id

    const body = req.body
    // validate body.title bat buoc
    // body.title max length 50
}