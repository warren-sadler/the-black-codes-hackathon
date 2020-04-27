const Profile = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleGetProfiles = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const profiles = await Profile.find();
      controllerUtils.ok(res, profiles);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = handleGetProfiles;
