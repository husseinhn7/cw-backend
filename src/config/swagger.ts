import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerDefinition } from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";

const swaggerDefinition : SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API Documentation",
  },
  servers: [
    {
      url: "http://localhost:8000",
      description: "Development server",
    },
  ],
};

const options : SwaggerOptions = {
  swaggerDefinition,
  apis: ["src/routers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;