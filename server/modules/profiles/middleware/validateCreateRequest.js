const { withControllerUtils } = require("../../../utils/controllerUtils");

const validateUserCreateRequest = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  function handler(req, res, next) {
    if (!req.body.userId) {
      controllerUtils.badRequest(
        res,
        "[Profile Create Error]: 'userId' is required to create a Profile"
      );
    } else {
      next();
    }
  }

  return handler;
});

module.exports = validateUserCreateRequest;
