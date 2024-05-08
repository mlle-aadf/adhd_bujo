// Intializes or ends mongoDB client connection

const { MongoClient } = require("mongodb")
require('dotenv').config()
const {MONGO_URI} = process.env
const dbName = 'adhd_bujo'

const mongoConnect = async (connected) => {

    const client = new MongoClient(MONGO_URI)
    const db = client.db(dbName)

    try {
        
        if (connected === true) {
            await client.connect()
            console.log("mongo connected")
            return db
        } else {
            await client.close()
            console.log("mongo disconnected")
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {mongoConnect}