require("dotenv").config()
const {TwitterApi} =require("twitter-api-v2")

const client = new TwitterApi({
  appKey:process.env.apiKey,
  appSecret:process.env.apiKeySecret,
  accessToken:process.env.accesstoken,
  accessSecret:process.env.accessTokenSecret
})

const rwClient = client.readWrite

module.exports = rwClient
