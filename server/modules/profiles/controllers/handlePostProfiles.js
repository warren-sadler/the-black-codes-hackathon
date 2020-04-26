const { withControllerUtils } = require("../../../utils");
const { Profile } = require("../model");

const handlePostProfiles = withControllerUtils((controllerUtils) => {
  return async function handler(req, res) {
    const newProfile = new Profile({
      ...req.body,
    });
    try {
      await newProfile.save();
      controllerUtils.ok(res, newProfile);
    } catch (profileCreateError) {
      controllerUtils.fail(res, profileCreateError);
    }
  };
});

module.exports = handlePostProfiles;
