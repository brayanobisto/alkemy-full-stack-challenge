const express = require('express')
const app = express()
const routes = require('./routes')

// Middlewares
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
