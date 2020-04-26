const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleGetUser = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      controllerUtils.ok(res, user);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleGetUser;
