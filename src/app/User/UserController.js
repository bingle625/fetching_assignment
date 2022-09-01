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
  console.log(req.body);
  const { id, pw, name } = req.body;
  if (!id) return res.send(errResponse(baseResponse.SIGNUP_ID_EMPTY));
  if (!pw) return res.send(errResponse(baseResponse.SIGNUP_PW_EMPTY));
  if (!name) return res.send(errResponse(baseResponse.SIGNUP_NAME_EMPTY));

  //길이 validation

  const createUserResult = await userService.createUser(id, pw, name);
  return res.send(createUserResult);
};
