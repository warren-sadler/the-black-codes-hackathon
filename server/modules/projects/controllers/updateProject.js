const Project = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleUpdateProject = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
      controllerUtils.ok(res, project);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleUpdateProject;
