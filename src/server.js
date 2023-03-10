const express = require('express')
const app = express()
const config = require('./config')

const { port } = config

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
