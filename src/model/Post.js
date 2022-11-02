const mongoose = require("mongoose");

const Schema = mongoose.Schema

const PostSchema = new Schema({
    id: Number,
    title: {type: String, required: true, maxLength: 120},
    content: String,
    tags: [Number],
})

PostSchema.index({id: 1}) // single field, features: expires, unique

const Post = mongoose.model("Post", PostSchema)

module.exports = Post