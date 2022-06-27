const express = require('express')
const app = express()
const routes = require('./routes')

const FRONTEND_URL = process.env.FRONTEND_URL

// Middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONTEND_URL) // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
app.use(express.json())
app.use('/', routes)

// Error catching endware.
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err

  console.error(err)

  res.status(status).send(message)
})

module.exports = app
