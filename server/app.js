const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDefinition = require("./swaggerDefinition");
const { mountProfilesRouter } = require("./modules/profiles");
const { mountProjectsRouter } = require("./modules/projects");
const { mountUsersRouter } = require("./modules/users");
const { mountAuthenticationRouter } = require("./modules/auth");

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
  app.use(require("helmet")());
  app.use(require("compression")());
  app.use(require("cors")());
  app.use(
    require("express-rate-limit")({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/api-docs", swaggerUI.serve);
  app.get("/api-docs", swaggerUI.setup(swaggerJSDoc(swaggerDefinition), {}));
  // Apply Routers
  mountAuthenticationRouter(app);
  mountProfilesRouter(app);
  mountProjectsRouter(app);
  mountUsersRouter(app);
  return app;
}

module.exports = buildApplication;
