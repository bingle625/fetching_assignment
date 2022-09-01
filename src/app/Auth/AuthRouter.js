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
 *       "2007":
 *         description: id를 입력해주세요.
 *       "2009":
 *         description: id를 30자 미만으로 입력해주세요.
 *       "2008":
 *         description: 비밀번호를 입력 해주세요.
 *       "2010":
 *         description: 비밀번호는 30자리 미만으로 입력해주세요.
 *       "3001":
 *         description: 틀린 id입니다.
 *       "3002":
 *         description: 틀린 비밀번호입니다.
 *       "3003":
 *         description: 비활성화된 user입니다.
 *       "3004":
 *         description: 삭제된 user입니다.
 *
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 */
authRouter.post("/user", authController.postLogin);
export default authRouter;
