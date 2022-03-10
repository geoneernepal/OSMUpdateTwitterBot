const client = require("./Twitter-bot/twitter");
const { default: axios } = require("axios");

const tweet = async () => {
  try {
    const response = await axios.get(
      "http://osm-stats-production-api.azurewebsites.net/stats/geoneer"
    );
    console.log(response.data);
    console.log("Job is starting");
    await client.v1.tweet(
      `${"#geoneer"} \nusers:${response.data.users} \nchangesets:${
        response.data.changesets
      } \nroads:${response.data.roads} \nbuildings:${
        response.data.buildings
      } \nedits:${response.data.edits} \nlatest:${response.data.latest}`
    );
  } catch (err) {
    console.log(err.message);
  }
};

setInterval(tweet, 1000 * 10);
