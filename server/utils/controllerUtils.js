const controllerUtils = {
  /**
   *
   * @param {import('express').Response} res
   * @param {Object} payload
   */
  ok(res, payload) {
    res.status(200).json({
      status: 200,
      message: "ok",
      payload,
    });
  },
  /**
   *
   * @param {import('express').Response} res
   * @param {Error|String} error
   */
  fail(res, error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server error",
      error: error.toString(),
    });
  },
  /**
   *
   * @param {import('express').Response} res
   * @param {Object} entity
   */
  created(res, entity) {
    res.status(201).json({
      status: 201,
      message: "created",
      payload: entity,
    });
  },
  badRequest(res, message = "Invalid request") {
    res.status(400).json({
      status: 400,
      message: message,
    });
  },
};

function withControllerUtils(willReceiveUtils) {
  return function (req, res, next) {
    willReceiveUtils(controllerUtils)(req, res, next);
  };
}

exports.withControllerUtils = withControllerUtils;
