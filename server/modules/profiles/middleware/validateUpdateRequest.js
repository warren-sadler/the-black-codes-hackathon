const { withControllerUtils } = require("../../../utils/controllerUtils");

const PROFILE_ATTRIBUTES = ["isActive", "yearsActive", "role", "picture", "currentStatus", "pronouns", "company", "website", "socialMedia", "bio", "location", "greeting"];

const validateUpdateRequest = withControllerUtils((controllerUtils) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  function handler(req, res, next) {
    if (!req.params.id) {
      controllerUtils.badRequest(
        res,
        `Project Update Error
      User ID required to update a Project`
      );
    } else if (
      !Object.keys(req.body).some((attribute) =>
      PROFILE_ATTRIBUTES.includes(attribute)
      )
    ) {
      controllerUtils.badRequest(
        res,
        `[Profile Update Error]: The only updatable fields on user entities are: [${PROFILE_ATTRIBUTES.join(
          ", "
        )}]`
      );
    } else {
      next();
    }
  }

  return handler;
});

module.exports = validateUpdateRequest;
