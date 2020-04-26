const { Router } = require("express");
const {
  validateCreateRequest,
  validateUpdateRequest,
} = require("./middleware");
const {
  handleGetProfiles,
  handlePostProfiles,
  handlePutProfiles,
} = require("./controllers");

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
  profilesRouter.post("/", validateCreateRequest, handlePostProfiles);
  profilesRouter.put("/:id", validateUpdateRequest, handlePutProfiles);
  app.use("/api/v1/profiles", profilesRouter);
}

module.exports = mountProfilesRouter;
