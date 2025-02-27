const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "CuQWXJbI#6QhD628MrfKLLFhch5VUl3Q9Q6WBgyTnaK3xJiehAbg",
  MONGODB: process.env.MONGODB || "mongodb://mongo:gypcdIlYLLwTrZUhrdhhNLtAQkzVBOQh@switchback.proxy.rlwy.net:45570",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361",
};
