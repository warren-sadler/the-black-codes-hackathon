const { withControllerUtils } = require("../../../utils");
const { Profile } = require("../model");

const handlePutProfiles = withControllerUtils((controllerUtils) => {
  return async function handler(req, res) {
    try {
      const { id } = req.params;
      const updatedProfile = await Profile.findByIdAndUpdate(id, req.body);
      controllerUtils.ok(res, updatedProfile);
    } catch (profileUpdateError) {
      controllerUtils.fail(res, profileUpdateError);
    }
  };
});

module.exports = handlePutProfiles;
