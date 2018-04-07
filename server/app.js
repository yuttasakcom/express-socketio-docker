const express = require('express')
const app = express()
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

const routes = require('./routes')

app.set('port', process.env.PORT || '3000')

app.use(express.static(resolve('../dist')))
app.get('/', (_, res) => res.sendFile(resolve('../dist/index.html')))

app.use(routes)

module.exports = app
