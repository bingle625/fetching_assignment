const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { pool } = require("../../../config/database");
const authDao = require("./authDao");
const authProvider = require("./authProvider");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
import "dotenv/config";
import { logger } from "../../../config/winston";

export const postSignIn = async function (id, pw) {
  try {
    console.log("hi");
    const idRows = await authProvider.idCheck(id);
    console.log(idRows);
    if (idRows.length < 1) {
      return errResponse(baseResponse.FAILURE);
    }

    const hashedPassword = await crypto.createHash("sha512").update(pw).digest("hex");

    const passwordRows = await authProvider.passwordCheck(id);

    if (passwordRows[0].pw !== hashedPassword) {
      return errResponse(baseResponse.FAILURE);
    }

    //todo: 계정 상태 확인
    // 계정 상태 확인
    const userInfoRows = await authProvider.statusCheck(id);
    if (userInfoRows[0].status === "INACTIVE") {
      return errResponse(baseResponse.FAILURE);
    } else if (userInfoRows[0].status === "DELETED") {
      return errResponse(baseResponse.FAILURE);
    }

    //todo jwt 토큰 만들기
    let token = jwt.sign(
      // 토큰의 내용 (payload)
      {
        userId: userInfoRows[0].userIdx
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "365d",
        subject: "User"
      }
    );

    return response(baseResponse.SUCCESS, {
      userId: userInfoRows[0].adminIdx,
      jwt: token
    });
  } catch (err) {
    logger.error(`App - postSignIn Service error: ${err.message}`);

    return errResponse(baseResponse.DB_ERROR);
  }
};
