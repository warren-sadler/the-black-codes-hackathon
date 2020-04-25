const { Router } = require("express");
const { handleAuthenticate } = require("./controllers");

/**
 *
 * @param {import('express').Application} app
 */
function mountAuthenticationRouter(app) {
  const authenticationRouter = Router();
  authenticationRouter.post("/", handleAuthenticate);
  app.use("/api/v1/auth", authenticationRouter);
}

module.exports = mountAuthenticationRouter;
