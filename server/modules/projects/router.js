const { Router } = require("express");
const Project = require("./model");
const { withControllerUtils } = require("../../utils/controllerUtils");

const handleGetProjects = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const projects = await Project.find();
      controllerUtils.ok(res, projects);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

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
