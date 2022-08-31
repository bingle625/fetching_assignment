const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
import "dotenv/config";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "빙글의 node.js 템플릿",
    description: "node.js의 테스트를 위한 템플릿입니다."
  },
  host: "localhost:3000",
  basePath: "/",
  servers: [
    {
      url: process.env.LOCAL_HOST // 요청 URL
    }
  ]
};
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./src/app/TestInit/*.js"] //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
