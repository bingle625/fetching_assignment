const { pool } = require("../../../config/database");
const baseResponseStatus = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { logger } = require("../../../config/winston");

const authDao = require("./authDao");
const handleError = (error) => logger.error(`❌DB Error: ${error.message}`);

exports.retrieveUserList = async function () {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const testResult = await authDao.selectUserPosts(connection);
    connection.release();
    return response(baseResponseStatus.SUCCESS, testResult);
  } catch (error) {
    handleError(error);
    connection.release();
    return errResponse(baseResponseStatus.FAILURE);
  }
};

exports.idCheck = async (id) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const idCheckResult = await authDao.selectUserId(connection, id);
    return idCheckResult[0];
  } catch (error) {
    handleError(error);
  } finally {
    connection.release();
  }
};

exports.passwordCheck = async function (id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const passwordCheckResult = await authDao.selectUserPassword(connection, id);
  connection.release();
  return passwordCheckResult[0];
};

exports.statusCheck = async (id) => {
  const connection = await pool.getConnection(async (conn) => conn);
  const userAcountResult = await authDao.selectUserAccount(connection, id);
  connection.release();
  return userAcountResult[0];
};
