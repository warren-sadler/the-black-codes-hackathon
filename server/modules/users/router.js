const { Router } = require("express");
const {
  handleGetUsers,
  handleGetUser,
  handlePostUsers,
  handlePutUsers,
  handleDeleteUser,
} = require("./controllers");
const {
  validateCreateRequest,
  validateUpdateRequest,
} = require("./middleware");

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
 *    post:
 *      summary: Create a new user
 *
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                emailAddress:
 *                  type: string
 *      tags: [Users]
 *
 *
 *   /users/{id}:
 *    get:
 *      summary: Get a user by id
 *      tags: [Users]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The id of a given user used to find the user entity in the database
 *    put:
 *      summary: Update a user
 *      tags: [Users]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The id of a given user used to find the user entity in the database
 *    delete:
 *      summary: Delete a user
 *      tags: [Users]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: The id of a given user used to find the user entity in the database
 */

/**
 *
 * @param {import('express').Application} app
 */
function mountUsersRouter(app) {
  const usersRouter = Router();
  usersRouter.get("/", handleGetUsers);
  usersRouter.post("/", validateCreateRequest, handlePostUsers);
  usersRouter.get("/:id", handleGetUser);
  usersRouter.put("/:id", validateUpdateRequest, handlePutUsers);
  usersRouter.delete("/:id", handleDeleteUser);
  app.use("/api/v1/users", usersRouter);
}

module.exports = mountUsersRouter;
