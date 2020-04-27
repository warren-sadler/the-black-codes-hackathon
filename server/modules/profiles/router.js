const { Router } = require("express");
const { 
  handleGetProfiles,
  handleCreateProfile,
  handleRetrieveProfile,
  handleUpdateProfile,
  handleDeleteProfile
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
 * @swagger
 * path:
 *   /profiles/:id:
 *    get:
 *      summary: Fetch a single profile
 *      tags: [Profiles]
 *      parameters:
 *        - name : id
 *          in: query
 *          type: integer
 *          description: ID of the profile being fetched
 *      response:
 *        200:
 *          description: Successfully found and return a profile
 *          schema:
 *            type: object
 *            properites:
 *              role:
 *                type: string
 *              picture:
 *                type: string
 *              currentStatus:
 *                type: string
 *              pronouns:
 *                type: string
 *              company:
 *                type: string
 *              website:
 *                type: string
 *              socialMedia:
 *                type: string
 *              bio:
 *                type: string
 *              location:
 *                type: string
 *              greeting:
 *                type: string
 */

/**
 *
 * @param {import('express').Application} app
 */
function mountProfilesRouter(app) {
  const profilesRouter = new Router();

  // Get and Create a profile
  profilesRouter
    .route("/")
    .get(handleGetProfiles)
    .post(handleCreateProfile);
  
  // Managae a single profile
  profilesRouter
    .route("/:id")
    .get(handleRetrieveProfile)
    .put(handleUpdateProfile)
    .delete(handleDeleteProfile);
  
  app.use("/api/v1/profiles", profilesRouter);
}

module.exports = mountProfilesRouter;
