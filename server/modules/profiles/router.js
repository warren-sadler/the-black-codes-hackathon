const { Router } = require("express");
const Profile = require("./model");

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function handleGetProfiles(req, res) {
  try {
    const profiles = await Profile.find();
    res.status(200).json({
      status: 200,
      message: "ok",
      payload: profiles,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.toString(),
    });
  }
}

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
