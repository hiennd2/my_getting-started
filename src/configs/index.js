const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    mongodbUri: process.env.MONGO_URI || 'mongodb://root:123456@localhost:27017/my_posts?authSource=admin'
}