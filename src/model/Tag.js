const mongoose = require('mongoose')

const TagSchema = new Schema({
    name: String,
    posts: [Number]
})

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag