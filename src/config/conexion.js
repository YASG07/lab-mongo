const mondongo = require('mongoose')
const redis = require('redis')
require('dotenv').config()

mondongo.connect(process.env.URI_MONGO)
    .then(() => {
        console.log('MongoDB: conexión establecida.')
    }).catch((error) => {
        console.error('MongoDB: imposible establecer la conexión.\nMongoDB: ', error);
    })

const redisCon = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
})

redisCon.on('error', (error) => {
    console.error('Redis: imposible establecer contacto.\nRedis: ', error)
})

redisCon.connect().then(() => {
    console.log('Redis: contacto establecido')
}).catch((error) => {
    console.error('Redis: under attack take cover.\nRedis: ', error)
})

module.exports = { mondongo, redisCon }