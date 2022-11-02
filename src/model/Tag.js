const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TagSchema = new Schema({
    id: Number,
    name: {type: String, required: true, maxLength: 60},
    posts: [Number]
})

TagSchema.index({id: 1}) 

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag