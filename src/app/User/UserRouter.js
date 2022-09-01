import express from "express";
const userController = require("./UserController");
const userRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/user:
 *   post:
 *     tags: [회원 도메인 api]
 *     summary: user 회원가입 api
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: userInfo
 *         description: admin 회원가입 정보 파라미터
 *         schema:
 *            type: object
 *            required:
 *              - id
 *              - pw
 *              - name
 *            properties:
 *                  id:
 *                        default: gks1354
 *                        description: user 로그인 identification
 *                        type: string
 *                  pw:
 *                        default: test12345678
 *                        description: user 비밀번호
 *                        type: string
 *                  name:
 *                        default: 한성재
 *                        description: user 이름
 *                        type: string
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
 *         description: 비밀번호는 20자리 미만으로 입력해주세요.
 *       "2008":
 *         description: user 이름을 입력해주세요
 *       "3001":
 *         description: 이미 존재하는 id입니다.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 */
userRouter.post("/", userController.postSignIn);
export default userRouter;
