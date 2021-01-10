const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const helmet = require('helmet')
app.use(helmet())
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter()
const port = 3000
require('dotenv').config()

app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const max_results = req.query.max_results;
    twitter.get(query, max_results).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))