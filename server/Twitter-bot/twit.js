require("dotenv").config();
// const twit = require("twit");

// const T = new twit({
//   consumer_key: process.env.apiKey,
//   consumer_secret: process.env.apiKeySecret,
//   access_token: process.env.accesstoken,
//   access_token_secret: process.env.accessTokenSecret,
// });

// module.exports = T;

const {TwitterApi} =require("twitter-api-v2")

const client = new TwitterApi({
  appKey:process.env.apiKey,
  appSecret:process.env.apiKeySecret,
  accessToken:process.env.accesstoken,
  accessSecret:process.env.accessTokenSecret
})

const rwClient = client.readWrite

module.exports = rwClient
