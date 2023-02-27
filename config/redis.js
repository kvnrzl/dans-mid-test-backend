const { createClient } = require("redis");

const client = createClient({
  host: "localhost",
  port: 6379,
});

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("error", (err) => {
  console.log("Something went wrong " + err);
});

client.connect();

module.exports = client;
