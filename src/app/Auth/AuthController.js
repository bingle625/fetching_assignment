const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const authProvider = require("./authProvider");
const authService = require("./authService");

/**
 * API No. 0.1
 * API Name : user 로그인 api
 * [POST] /app/aut/user
 */

export const postLogin = async (req, res) => {
  /*
    body: id, password
  */
  const { id, pw } = req.body;

  console.log(req.body);
  //id validation
  if (!id) {
    return res.send(errResponse(baseResponse.FAILURE));
  } else if (id.length > 255) {
    return res.send(errResponse(baseResponse.FAILURE));
  }

  //pw validation
  if (!pw) {
    return res.send(errResponse(baseResponse.FAILURE));
  } else if (pw.length > 30) {
    return res.send(errResponse(baseResponse.FAILURE));
  }
  // } else if (!regexPwd.test(pw)) {
  //   return res.send(errResponse(baseResponse.SIGNIN_PASSWORD_WRONG));
  // }

  const signInResponse = await authService.postSignIn(id, pw);
  return res.send(signInResponse);
};
