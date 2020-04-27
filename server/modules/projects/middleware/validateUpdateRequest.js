const { withControllerUtils } = require("../../../utils/controllerUtils");

const PROJECT_ATTRIBUTES = ["title", "tags", "description", "repositoryURL", "languages"];

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
        PROJECT_ATTRIBUTES.includes(attribute)
      )
    ) {
      controllerUtils.badRequest(
        res,
        `[Profile Update Error]: The only updatable fields on user entities are: [${PROJECT_ATTRIBUTES.join(
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
