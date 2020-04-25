const { Router } = require("express");
const Profile = require("./model");
const { withControllerUtils } = require("../../utils/controllerUtils");

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

/**
 *
 * @param {import('express').Application} app
 */
function mountProfilesRouter(app) {
  const profilesRouter = new Router();
  profilesRouter.get("/", handleGetProfiles);
  app.use("/api/v1/profiles", profilesRouter);
}

module.exports = mountProfilesRouter;
