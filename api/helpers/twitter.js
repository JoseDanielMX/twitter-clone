const axios = require('axios')
const URL = 'https://api.twitter.com/2/tweets/search/recent'

class Twitter {
  get(query, max_results) {
    return axios.get(URL, {
      params: {
        query: query,
        max_results: max_results,
        'tweet.fields': 'attachments',
        expansions: 'attachments.media_keys',
        'media.fields': 'type,preview_image_url,duration_ms,public_metrics',
      },
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    })
  }
}

module.exports = Twitter
