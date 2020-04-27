const Project = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleRetrieveProject = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findById(id);
      controllerUtils.ok(res, project);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleRetrieveProject;