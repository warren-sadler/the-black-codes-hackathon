const { withControllerUtils } = require("../../../utils/controllerUtils");

const validateUserCreateRequest = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  function handler(req, res, next) {
    if (!req.body.emailAddress) {
      controllerUtils.badRequest(
        res,
        "[User Create Error]: 'emailAddress' is required to create a User"
      );
    } else {
      next();
    }
  }

  return handler;
});

module.exports = validateUserCreateRequest;
