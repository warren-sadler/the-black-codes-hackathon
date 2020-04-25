const path = require("path");

module.exports = {
  apis: [path.resolve(__dirname, "./modules/**/router.js")],
  servers: [
    {
      url: "http://localhost:8080/api/v1",
    },
  ],
  swaggerDefinition: {
    info: {
      title: "The Black Codes API", // Title (required)
      version: "0.1.0", // Version (required)
      description: "The Black Codes Hackathon API", // Description (optional)
    },
    basePath: "http://localhost:8080/api/v1", // Base path (optional)
  },
};
