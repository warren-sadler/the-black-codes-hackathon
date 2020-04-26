const { withControllerUtils } = require("../../../utils/controllerUtils");

const handleAuthenticate = withControllerUtils((controllerUtils) => {
  return (req, res) => {
    controllerUtils.ok(res, "User Token: 12334");
  };
});

module.exports = handleAuthenticate;
