
module.exports = io => {
  io.on('connection', socket => {
    console.log('new user connected')

    socket.on('sendLog', log => {
      io.emit('newLog', log)
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}
