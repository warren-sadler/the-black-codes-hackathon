const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleGetUsers = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const users = await User.find().populate("profile");
      controllerUtils.ok(res, users);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleGetUsers;
