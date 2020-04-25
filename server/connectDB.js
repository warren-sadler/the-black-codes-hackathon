const mongoose = require("mongoose");

/**
 * Given application config establishes
 * database connection. This function also
 * sets up several event listeners for
 * database connection lifecycle management.
 *
 * @param {import('./config').Config} config
 */
function establishDatabaseConnection(config) {
  mongoose.connect(config.DATABASE_URI);

  mongoose.connection.on("connected", () => {
    config.LOGGER.info("[db.js]: Mongoose client connected 🚀");
  });

  mongoose.connection.on("disconnected", () => {
    config.LOGGER.info("[db.js]: Mongoose client disconnected");
  });

  mongoose.connection.on("error", (error) => {
    config.LOGGER.error(`[db.js]: Mongoose encountered an error: ${error}`);
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      config.LOGGER.info(
        "[db.js]: Mongoose connection disconnected through app termination"
      );
      process.exit(0);
    });
  });
}

module.exports = establishDatabaseConnection;
