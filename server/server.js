const http = require('http')
const socketIO = require('socket.io')

const redis = require('redis')
const redisAdapter = require('socket.io-redis')
const pub = redis.createClient('6379', 'redis')
const sub = redis.createClient('6379', 'redis')

const app = require('./app')
const server = http.createServer(app)
const io = socketIO(server)
io.adapter(redisAdapter({ pubClient: pub, subClient: sub }))
require('./socket')(io)

server.listen(app.get('port'))
console.log(`Server running on port:${app.get('port')}`)
