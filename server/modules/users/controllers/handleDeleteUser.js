const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleDeleteUser = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      controllerUtils.ok(res);
    } catch (deleteError) {
      controllerUtils.fail(res, deleteError);
    }
  };
});

module.exports = handleDeleteUser;
