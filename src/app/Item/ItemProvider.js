const { pool } = require("../../../config/database");
const baseResponseStatus = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { logger } = require("../../../config/winston");
const itemDao = require("./ItemDao").default;

export const retrieveItemList = async () => {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const retrieveItemRows = await itemDao.selectItems(connection);
    return response(baseResponseStatus.SUCCESS, retrieveItemRows);
  } catch (error) {
    logger.error(`❌ retrieveItemList Provider Error: ${error.message}`);
    return errResponse(baseResponseStatus.FAILURE);
  } finally {
    connection.release();
  }
};

export const retrieveItemDetail = async (itemIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const retrieveItemDetail = await itemDao.selectItem(connection, itemIdx);
    return response(baseResponseStatus.SUCCESS, retrieveItemDetail);
  } catch (error) {
    logger.error(`❌ retrieveItemDetail Provider Error: ${error.message}`);
    return errResponse(baseResponseStatus.FAILURE);
  } finally {
    connection.release();
  }
};

export const retrieveItemsByFilter = async (color, brand, size) => {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const retrieveItemRows = await itemDao.selectItemsByFilter(connection, color, brand, size);
    console.log(retrieveItemRows);
    return response(baseResponseStatus.SUCCESS, retrieveItemRows);
  } catch (error) {
    logger.error(`❌ retrieveItemsByFilter Provider Error: ${error.message}`);
    return errResponse(baseResponseStatus.FAILURE);
  } finally {
    connection.release();
  }
};
