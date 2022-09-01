const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const userProvider = require("./UserProvider");
const userService = require("./UserService");

/**
 * API No. 1.1
 * API Name : user 회원가입 API
 * [POST] /app/user
 */

export const postSignIn = async (req, res) => {
  const { id, pw, name } = req.body;
  if (!id) return res.send(errResponse(baseResponse.SIGNUP_ID_EMPTY));
  if (!pw) return res.send(errResponse(baseResponse.SIGNUP_PW_EMPTY));
  if (!name) return res.send(errResponse(baseResponse.SIGNUP_NAME_EMPTY));

  //길이 validation

  const createUserResult = await userService.createUser(id, pw, name);
  return res.send(createUserResult);
};

/**
 * API No. 1.2
 * API Name : user 회원의 상품 좋아요 api
 * [POST] /app/user/itemLike?userIdx={userIdx}&itemIDx={itemIdx}
 */

export const itemLike = async (req, res) => {
  const userIdx = req.query.userIdx;
  const itemIdx = req.query.itemIdx;
  if (!userIdx) return res.send(errResponse(baseResponse.USER_INDEX_EMPTY));
  if (!itemIdx) return res.send(errResponse(baseResponse.ITEM_INDEX_EMPTY));
  const insertItemLikeResult = await userService.insertItemLike(userIdx, itemIdx);
  return res.send(insertItemLikeResult);
};
