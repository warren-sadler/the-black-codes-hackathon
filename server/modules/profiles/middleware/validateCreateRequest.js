const {
  buildRequestBodyValidator,
  withControllerUtils,
} = require("../../../utils");

const hasUserID = buildRequestBodyValidator(["userID"]);

const validateCreateRequest = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  return function validateCreateRequestHandler(req, res, next) {
    if (!hasUserID(req)) {
      controllerUtils.badRequest(
        res,
        "[Profile Create Error]: A userID is required to create a profile"
      );
      return;
    } else {
      next();
    }
  };
});

module.exports = validateCreateRequest;
