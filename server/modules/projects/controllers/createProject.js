const { withControllerUtils } = require("../../../utils/controllerUtils");
const Project = require("../model");

const createProject = withControllerUtils((controllerUtils) => {
  return (req, res) => {
    
    try {
      const newProject = new Project(req.body);
      newProject.save(err => {
        if (err) {
          controllerUtils.fail(res, err);
        }
        controllerUtils.ok(res, newProject);
      });
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = createProject;
