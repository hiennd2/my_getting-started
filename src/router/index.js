const postRouter = require('./post.router')
const tagRouter = require('./tags.router')
function route(app) {
    app.use('/', postRouter)
    app.use('/tags', tagRouter)
}

module.exports = route