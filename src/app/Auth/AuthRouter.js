import express from "express";
const authController = require("./authController");
const authRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/auth/user:
 *   post:
 *     tags: [회원 인증 api]
 *     summary: user 로그인 api
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: userInfo
 *        description: user 로그인 정보 파라미터
 *        schema:
 *           type: object
 *           required:
 *             - id
 *             - pw
 *           properties:
 *                 id:
 *                       default: test1234
 *                       description: user 로그인 id
 *                       type: string
 *                 pw:
 *                       default: gks12345678
 *                       description: user 로그인 비밀번호
 *                       type: string
 *
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2001":
 *         description: id를 입력해주세요.
 *       "2002":
 *         description: id를 30자 미만으로 입력해주세요.
 *       "2004":
 *         description: 비밀번호를 입력 해주세요.
 *       "2005":
 *         description: 비밀번호는 30자리 미만으로 입력해주세요.
 *       "3001":
 *         description: 이미 존재하는 id입니다.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 */
authRouter.post("/user", authController.postLogin);
export default authRouter;
