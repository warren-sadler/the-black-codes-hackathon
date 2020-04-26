const {
  buildRequestBodyValidator,
  withControllerUtils,
} = require("../../../utils");
const { profileSchemaKeys } = require("../model");

// Build validator function from ProfileSchemaKeys
/**
 * Ensures req.body has valid profile attributes
 * @var hasProfileAttributes
 * @type {Function}
 */
const hasProfileAttributes = buildRequestBodyValidator(profileSchemaKeys);

const validateUpdateRequest = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  return function validateUpdateRequestHandler(req, res, next) {
    if (!req.params.id) {
      controllerUtils.badRequest(
        res,
        "[Update Profile Error]: profileID route parameter is required to update a profile entity"
      );
      return;
    } else if (!hasProfileAttributes(req)) {
      controllerUtils.badRequest(
        res,
        `[Update Profile Error]: The only updatable fields on profile entities are: ${profileSchemaKeys}`
      );
      return;
    } else {
      next();
    }
  };
});

module.exports = validateUpdateRequest;
