const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const helmet = require('helmet')
app.use(helmet())
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter()
const port = 8080
require('dotenv').config()

app.get('/tweets', (req, res) => {
  const query = req.query.q
  const count = req.query.count
  const maxId = req.query.max_id
  twitter.get(query, count, maxId).then((response) => {
      res.status(200).send(response.data)
    }).catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
