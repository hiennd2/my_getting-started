const postRouter = require('./post.router')

function route(app) {
    app.use('/', postRouter)
}

module.exports = route