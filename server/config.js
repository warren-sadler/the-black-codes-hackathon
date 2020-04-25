const logger = require("./logger");
const connectDB = require("./connectDB");
/** .
 * @typedef Config
 * @property {number} PORT
 * @property {Array<Function>} BEFORE_SERVER_START_FNS
 * @property {string} NODE_ENV
 * @property {string} DATABASE_URI
 * @property {import('winston').Logger} LOGGER
 */
module.exports = {
  PORT: process.env.PORT || 8080,
  BEFORE_SERVER_START_FNS: [connectDB],
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URI: "mongodb://localhost/the-black-codes",
  LOGGER: logger,
};
