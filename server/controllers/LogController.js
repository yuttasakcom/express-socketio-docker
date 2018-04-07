const io = require('socket.io-client')

exports.create = (req, res, next) => {
  const socket = io('http://localhost:3000')
  socket.emit('sendLog', {
    meta: {name: 'Yo'}
  })
  res.send('OK')
}
