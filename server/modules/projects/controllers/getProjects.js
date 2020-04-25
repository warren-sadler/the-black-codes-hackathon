const Project = require("./model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

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

module.exports = handleGetProjects;
