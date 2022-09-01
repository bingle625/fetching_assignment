const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { pool } = require("../../../config/database");
const userDao = require("./UserDao");
const userProvider = require("./UserProvider");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
import "dotenv/config";
import { logger } from "../../../config/winston";

export const createUser = async (id, pw, name) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const hashedPassword = await crypto.createHash("sha512").update(pw).digest("hex");

    const userInfo = [id, hashedPassword, name];
    //id 중복 확인
    // const emailStatus = await userDao.selectAdminEmail(connection, adminEmail);
    // if (emailStatus[0].length > 0) {
    //   return errResponse(baseResponse.SIGNUP_REDUNDANT_EMAIL);
    // }
    const createUserResult = await userDao.insertUserInfo(connection, userInfo);

    return response(baseResponse.SUCCESS, createUserResult[0].insertId);
  } catch (err) {
    await connection.rollback();
    logger.error(`App - createUser Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};
