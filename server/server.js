const http = require('http')
const socketIO = require('socket.io')
const app = require('./app')
const server = http.createServer(app)
const io = socketIO(server)

require('./socket')(io)

server.listen(app.get('port'))
console.log(`Server running on port:${app.get('port')}`)
