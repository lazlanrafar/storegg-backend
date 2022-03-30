const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  baseUrl: process.env.BASE_URL,
};
