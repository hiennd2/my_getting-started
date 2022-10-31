const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 3002
const route = require('./src/router/index')

app.use(express.json());

const mongodb = require('./src/services/mongo/connections/mongo')
const redis = require('./src/services/redis/connections/redis')
mongodb.connect()
redis.connect()

route(app)

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})
