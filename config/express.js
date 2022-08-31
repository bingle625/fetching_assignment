const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
import AuthRouter from "../src/app/Auth/AuthRouter";
import itemRouter from "../src/app/Item/ItemRouter";
import testRouter from "../src/app/TestInit/TestRouter";
import userRouter from "../src/app/User/UserRouter";
const { swaggerUi, specs } = require("../swagger/swagger");

module.exports = function () {
  const app = express();

  //json 설정
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //compression 설정
  app.use(compression());

  //method-override 설정
  app.use(methodOverride());

  //cors 설정
  app.use(cors());

  app.get("/", function (req, res) {
    res.send("Hi");
  });
  //해당 줄 아래에 추가할 도메인 추가

  app.use("/test", testRouter);
  app.use("/app/auth", AuthRouter);
  app.use("/app/user", userRouter);
  app.use("/app/item", itemRouter);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  return app;
};
