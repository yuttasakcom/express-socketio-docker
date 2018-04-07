module.exports = io => {
  io.on('connection', socket => {
    console.log('user connect')
    socket.on('close', () => {
      console.log('user disconnect')
    })
  })
}
