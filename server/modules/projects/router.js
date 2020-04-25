const { Router } = require("express");
const Project = require("./model");

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function handleGetProjects(req, res) {
  const projects = await Project.find();
  try {
    res.status(200).json({
      status: 200,
      message: "ok",
      payload: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
}

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
