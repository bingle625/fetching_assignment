const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const { pool } = require("../../../config/database");
const itemDao = require("./ItemDao").default;
import "dotenv/config";
import { logger } from "../../../config/winston";

export const createItem = async (name, description, brand, price, size, color) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const itemInfo = [name, description, brand, price, size, color];

    const createItemInfo = await itemDao.insertItem(connection, itemInfo);

    return response(baseResponse.SUCCESS, createItemInfo[0].insertId);
  } catch (err) {
    logger.error(`App - createItem Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};

export const editItemDetail = async (itemIdx, name, description, brand, price, size, color) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const itemInfo = [name, description, brand, price, size, color, itemIdx];

    const editItemInfo = await itemDao.editItem(connection, itemInfo);

    return response(baseResponse.SUCCESS, editItemInfo.insertId);
  } catch (err) {
    logger.error(`App - editItemDetail Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};

export const deleteItem = async (itemIdx) => {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const itemInfo = [itemIdx];

    const deleteItemInfo = await itemDao.deleteItem(connection, itemInfo);

    return response(baseResponse.SUCCESS, deleteItemInfo.insertId);
  } catch (err) {
    logger.error(`App - deleteItem Service error: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};
