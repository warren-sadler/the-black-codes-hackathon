const express = require("express");
const { mountProfilesRouter } = require("./modules/profiles");
const { mountProjectsRouter } = require("./modules/projects");
const { mountUsersRouter } = require("./modules/users");

/**
 * Given a configuration object returns
 * an instance of an Express Application.
 * @param {import('./config').Config} config
 * @returns {import('express').Application}
 */
function buildApplication() {
  const app = express();
  // Apply Middleware
  app.use(require("morgan")("combined"));
  // Apply Routers
  mountProfilesRouter(app);
  mountProjectsRouter(app);
  mountUsersRouter(app);
  return app;
}

module.exports = buildApplication;
