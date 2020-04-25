const http = require("http");
const buildApplication = require("./app");

/**
 *
 * @param {import('./config').Config} config
 */
function startServer(config) {
  config.BEFORE_SERVER_START_FNS.forEach((fn) => {
    fn(config);
  });
  const app = buildApplication(config);
  const server = http.createServer(app);
  server.listen(config.PORT, () => {
    config.LOGGER.info(`Application running on port: ${config.PORT}`);
  });
}

module.exports = startServer;
