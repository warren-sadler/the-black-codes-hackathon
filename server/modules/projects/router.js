const { Router } = require("express");
const { 
  handleGetProjects,
  handleCreateProject,
  handleRetrieveProject,
  handleUpdateProject,
  handleDeleteProject
} = require("./controllers");

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
  const projectsRouter = new Router();

  // Get and Create Projects
  projectsRouter
    .route("/")
    .get(handleGetProjects)
    .post(handleCreateProject);

  // Manage a single project
  projectsRouter
    .route("/:id")
    .get(handleRetrieveProject)
    .put(handleUpdateProject)
    .delete(handleDeleteProject);
    
  app.use("/api/v1/projects", projectsRouter);
}

module.exports = mountProjectsRouter;
