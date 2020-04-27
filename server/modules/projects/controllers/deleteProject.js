const Project = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleDeleteProject = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findByIdAndDelete(id);
      controllerUtils.ok(res, project);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleDeleteProject;