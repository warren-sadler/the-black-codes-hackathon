const Profile = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleUpdateProfile = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const { id } = req.params;
      const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
      controllerUtils.ok(res, profile);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleUpdateProfile;
