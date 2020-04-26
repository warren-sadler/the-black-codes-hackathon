const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handlePostUsers = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  return async function handler(req, res) {
    const newUser = new User({
      ...req.body,
    });
    try {
      const createdUser = await newUser.save();
      controllerUtils.ok(res, createdUser);
    } catch (userCreateError) {
      controllerUtils.fail(res, userCreateError);
    }
  };
});

module.exports = handlePostUsers;
