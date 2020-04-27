const { withControllerUtils } = require("../../../utils/controllerUtils");
const Profile = require("../model");

const createProfile = withControllerUtils((controllerUtils) => {
  return (req, res) => {
    
    try {
      const newProfile = new Profile(req.body);
      newProfile.save(err => {
        if (err) {
          controllerUtils.fail(res, err);
        }
        controllerUtils.ok(res, newProfile);
      });
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

module.exports = createProfile;
