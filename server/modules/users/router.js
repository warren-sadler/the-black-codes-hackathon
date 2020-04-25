const { Router } = require("express");
const { handleGetUsers, handlePostUsers } = require("./controllers");
const { validateCreateBody } = require("./middleware");

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

/**
 *
 * @param {import('express').Application} app
 */
function mountUsersRouter(app) {
  const usersRouter = Router();
  usersRouter.get("/", handleGetUsers);
  usersRouter.post("/", validateCreateBody, handlePostUsers);
  app.use("/api/v1/users", usersRouter);
}

module.exports = mountUsersRouter;
