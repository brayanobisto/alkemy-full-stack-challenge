process.env.NODE_ENV !== 'production' && require('dotenv').config()

const app = require('./src/app')
const { conn } = require('./src/db.js')

const PORT = process.env.PORT || 3001

conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
