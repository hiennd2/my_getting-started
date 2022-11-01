const { createClient } = require('redis')

const client = createClient()

async function connect() {
    try {
        client.on('error', (err) => console.log('Redis Client Error: ', err))
        await client.connect()
        console.log('Redis Connect Success')
    } catch (error) {
        console.log('Redis Connect Fail: ', error)
    }
}

module.exports = { connect, client }