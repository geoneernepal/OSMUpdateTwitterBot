const { default: axios } = require("axios");
const client = require("./Twitter-bot/twit");
// const schedule = require("node-schedule");
// const axiosInstance = require("./Twitter-bot/axios")

// const rule = new schedule.RecurrenceRule();
// rule.second = 1;
// console.log(rule);


const tweet = async () => {
  try {
    const response = await axios.get("http://osm-stats-production-api.azurewebsites.net/stats/geoneer")
    console.log(response.data)

    // const randomNum = Math.floor(Math.random() * 100);
    console.log("job is starting...");
    await client.v1.tweet(`${"#geoneer"} users:${response.data.users} ${randomNum}`);
    // await client.v1.tweet(response.data.data.text)
  } catch (err) {
    console.log(err.message); 
  }
};

// const job = schedule.scheduleJob({ rule }, async () => {
//   tweet();
// });

// job

setInterval(tweet,1000*10);


