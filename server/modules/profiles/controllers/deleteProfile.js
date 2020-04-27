const Profile = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleDeleteProfile = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const { id } = req.params;
      const profiles = await Profile.findByIdAndDelete(id);
      controllerUtils.ok(res, profiles);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleDeleteProfile;
