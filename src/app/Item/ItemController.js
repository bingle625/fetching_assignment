const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const itemProvider = require("./ItemProvider");
const itemServcie = require("./ItemService");

/**
 * API No. 3.1
 * API Name : 상품 생성 api
 * [POST] /app/item
 */

export const createItem = async (req, res) => {
  console.log("1");
  /*
    body: 
      - name
      - description
      - brand
      - price
      - size
      - color
  */
  const { name, description, brand, price, size, color } = req.body;

  //todo: 모든 파라미터 (etc 제외) 다 있는 지 확인
  if (!name) return res.send(errResponse(baseResponse.FAILURE));
  if (!description) return res.send(errResponse(baseResponse.FAILURE));
  if (!brand) return res.send(errResponse(baseResponse.FAILURE));
  if (!price) return res.send(errResponse(baseResponse.FAILURE));
  if (!size) return res.send(errResponse(baseResponse.FAILURE));
  if (!color) return res.send(errResponse(baseResponse.FAILURE));

  const createItemResult = await itemServcie.createItem(name, description, brand, price, size, color);
  return res.send(createItemResult);
};

/**
 * API No. 3.2
 * API Name : 상품 전체조회 api
 * [GET] app/item
 */
export const retrieveItems = async (req, res) => {
  console.log("2");

  const retrieveItemsResult = await itemProvider.retrieveItemList();
  return res.send(retrieveItemsResult);
};

/**
 * API No. 3.3
 * API Name : 상품 상세조회 api
 * [GET] app/item/:id
 */
export const retrieveItemDetail = async (req, res) => {
  console.log("3");

  const itemIdx = req.params.id;
  const retrieveItemDetailResult = await itemProvider.retrieveItemDetail(itemIdx);
  return res.send(retrieveItemDetailResult);
};

/**
 * API No. 3.4
 * API Name : 상품 수정 api
 * [PATCH] app/item/:id
 */
export const patchItem = async (req, res) => {
  console.log("4");

  const itemIdx = req.params.id;
  const { name, description, brand, price, size, color } = req.body;
  if (!name) return res.send(errResponse(baseResponse.FAILURE));
  if (!description) return res.send(errResponse(baseResponse.FAILURE));
  if (!brand) return res.send(errResponse(baseResponse.FAILURE));
  if (!price) return res.send(errResponse(baseResponse.FAILURE));
  if (!size) return res.send(errResponse(baseResponse.FAILURE));
  if (!color) return res.send(errResponse(baseResponse.FAILURE));
  const editItemDetailResult = await itemServcie.editItemDetail(itemIdx, name, description, brand, price, size, color);
  return res.send(editItemDetailResult);
};

/**
 * API No. 3.5
 * API Name : 상품 삭제 api
 * [PATCH] app/item/status/:id
 */
export const deleteItem = async (req, res) => {
  console.log("5");

  const itemIdx = req.params.id;
  const deleteItemResult = await itemServcie.deleteItem(itemIdx);
  return res.send(deleteItemResult);
};

/**
 * API No. 3.6
 * API Name : 상품 필터 api
 * [PATCH] app/item/filter?itemIdx={itemIdx}&color={color}&brand={brand}&size={size}
 */

export const retrieveItemsByFilter = async (req, res) => {
  console.log("HIHIHIHIHIHIHI");
  const color = req.query.color;
  const brand = req.query.brand;
  const size = req.query.size;
  console.log(color, brand, size);

  const retrieveItemsResult = await itemProvider.retrieveItemsByFilter(color, brand, size);
  return res.send(retrieveItemsResult);
};
