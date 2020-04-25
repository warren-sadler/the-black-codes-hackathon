const User = require("../model");
const { withControllerUtils } = require("../../../utils/controllerUtils");

const handlePutUsers = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async function handler(req, res) {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body);
      controllerUtils.ok(res, updatedUser);
    } catch (userUpdateError) {
      controllerUtils.fail(res, userUpdateError);
    }
  }
  return handler;
});

module.exports = handlePutUsers;
