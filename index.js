require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! world')
})

app.get('/twiter', (req, res) => {
    res.send('hello jiirun start')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

 
