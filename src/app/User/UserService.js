const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { pool } = require("../../../config/database");
const userDao = require("./UserDao");
const userProvider = require("./UserProvider");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const authDao = require("../Auth/AuthDao");
import "dotenv/config";
import { logger } from "../../../config/winston";

export const createUser = async (id, pw, name) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const hashedPassword = await crypto.createHash("sha512").update(pw).digest("hex");

    const userInfo = [id, hashedPassword, name];
    // id 중복 확인
    const idStatus = await authDao.selectUserId(connection, id);
    if (idStatus[0].length > 0) {
      return errResponse(baseResponse.SIGNUP_REDUNDANT_ID);
    }
    const createUserResult = await userDao.insertUserInfo(connection, userInfo);

    return response(baseResponse.SUCCESS, createUserResult[0].insertId);
  } catch (err) {
    logger.error(`App - createUser Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};

export const insertItemLike = async (userIdx, itemIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const liekInfo = [userIdx, itemIdx];
    //jwt 토큰과 일치하는 지 확인

    //유저 상태 확인
    //상품 상태 확인
    //상품 좋아요 이미 존재하는 지 확인

    const createLikeResult = await userDao.insertLikeInfo(connection, liekInfo);

    return response(baseResponse.SUCCESS, createLikeResult[0].insertId);
  } catch (err) {
    logger.error(`App - insertItemLike Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};
