const io = require('socket.io-client')

exports.create = (req, res, next) => {
  const socket = io(process.env.SOCKET_SERVER_CONNECT, {'transports': ['websocket', 'polling']})
  socket.emit('sendLog', {
    meta: {name: 'Yo'}
  })
  res.send('OK')
}
