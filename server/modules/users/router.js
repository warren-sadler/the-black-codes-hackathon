const { Router } = require("express");
const User = require("./model");

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function handleGetUsers(req, res) {
  const users = await User.find();
  try {
    res.status(200).json({
      status: 200,
      message: "ok",
      payload: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
}

/**
 *
 * @param {import('express').Application} app
 */
function mountUsersRouter(app) {
  const usersRouter = Router();
  usersRouter.get("/", handleGetUsers);
  app.use("/api/v1/users", usersRouter);
}

module.exports = mountUsersRouter;
