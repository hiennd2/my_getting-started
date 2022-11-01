const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    content: String,
    tags: [Number],
})


PostSchema.index({title: "text"}) // single field, features: expires, unique

const Post = mongoose.model("Post", PostSchema)

module.exports = Post