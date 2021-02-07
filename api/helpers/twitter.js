const axios = require('axios');
const URL = "https://api.twitter.com/2/tweets/search/recent";

class Twitter {
    get(query, max_results, expansions, media) {
        return axios.get(URL, {
            params: {
                query: query,
                max_results: max_results,
                expansions: expansions,
                media: media
            },
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
    }
}

module.exports = Twitter;