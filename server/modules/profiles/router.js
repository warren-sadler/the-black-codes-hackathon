const { Router } = require("express");
const { handleGetProfiles } = require("./controllers");

/** .
 * @swagger
 * tags:
 *   name: Profiles
 *   description: Profile Management and Retrieval
 */

/**
 *
 * @swagger
 * path:
 *   /profiles/:
 *    get:
 *      summary: Fetch all profiles
 *      tags: [Profiles]
 */

/**
 *
 * @param {import('express').Application} app
 */
function mountProfilesRouter(app) {
  const profilesRouter = new Router();
  profilesRouter.get("/", handleGetProfiles);
  app.use("/api/v1/profiles", profilesRouter);
}

module.exports = mountProfilesRouter;
