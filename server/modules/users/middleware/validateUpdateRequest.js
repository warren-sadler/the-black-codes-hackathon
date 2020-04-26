const { withControllerUtils } = require("../../../utils/controllerUtils");

const USER_ATTRIBUTES = ["name", "emailAddress", "profile"];

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
        `User Update Error
      User ID required to update a User`
      );
    } else if (
      !Object.keys(req.body).some((attribute) =>
        USER_ATTRIBUTES.includes(attribute)
      )
    ) {
      controllerUtils.badRequest(
        res,
        `[User Update Error]: The only updatable fields on user entities are: [${USER_ATTRIBUTES.join(
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
