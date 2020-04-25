const { Router } = require("express");
const User = require("./model");
const { withControllerUtils } = require("../../utils/controllerUtils");
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Management and Retrieval
 */

/**
 *
 * @swagger
 * path:
 *   /users/:
 *    get:
 *      summary: Fetch all users
 *      tags: [Users]
 */

const handleGetUsers = withControllerUtils((controllerUtils) => {
  return async (req, res) => {
    try {
      const users = await User.find();
      controllerUtils.ok(res, users);
    } catch (error) {
      controllerUtils.fail(res, error);
    }
  };
});

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
