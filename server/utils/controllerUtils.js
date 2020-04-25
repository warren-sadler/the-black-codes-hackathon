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
};

function withControllerUtils(willReceiveUtils) {
  return function (req, res) {
    willReceiveUtils(controllerUtils)(req, res);
  };
}

exports.withControllerUtils = withControllerUtils;
