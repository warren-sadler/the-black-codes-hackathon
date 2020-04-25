const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handlePostUsers = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async function handler(req, res) {
    const newUser = new User({
      emailAddress: req.body.emailAddress,
    });
    try {
      const createdUser = await newUser.save();
      controllerUtils.ok(res, createdUser);
    } catch (userCreateError) {
      controllerUtils.fail(res, userCreateError);
    }
  }
  return handler;
});

module.exports = handlePostUsers;
