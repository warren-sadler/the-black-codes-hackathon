const path = require("path");

module.exports = {
  apis: [path.resolve(__dirname, "./modules/**/router.js")],
  swaggerDefinition: {
    info: {
      title: "The Black Codes API", // Title (required)
      version: "0.1.0", // Version (required)
      description: "The Black Codes Hackathon API", // Description (optional)
    },
    basePath: "/api/v1", // Base path (optional)
  },
};
