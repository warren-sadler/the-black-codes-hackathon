const { Router } = require("express");
const { handleGetProjects } = require("./controllers");

/** .
 * @swagger
 * tags:
 *   name: Projects
 *   description: Project Management and Retrieval
 */

/**
 *
 * @swagger
 * path:
 *   /projects/:
 *    get:
 *      summary: Fetch all projects
 *      tags: [Projects]
 */

/**
 *
 * @param {import('express').Application} app
 */
function mountProjectsRouter(app) {
  const projectsRouter = Router();
  projectsRouter.get("/", handleGetProjects);
  app.use("/api/v1/projects", projectsRouter);
}

module.exports = mountProjectsRouter;
