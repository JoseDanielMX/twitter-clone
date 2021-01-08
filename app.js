const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000
require('dotenv').config()

app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const max_results = req.query.max_results;
    const url = "https://api.twitter.com/2/tweets/search/recent";
    axios.get(url, {
        params: {
            query: query,
            max_results: max_results
        },
        headers: {
            "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
        }
    }).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))