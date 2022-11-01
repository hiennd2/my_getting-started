const mongoose = require('mongoose')
const uri = require('../../../configs/index')

async function connect() {
    try {
        await mongoose.connect(uri.mongodbUri)
        console.log('Mongo Connect Success')
    } catch (error) {
        console.log("Mongo Connect Fail")
        console.log(error)
    }
}

module.exports = { connect }