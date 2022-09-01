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
 *      - in: body
 *        name: userInfo
 *        description: user 회원가입 정보  파라미터
 *        schema:
 *           type: object
 *           required:
 *             - id
 *             - pw
 *             - name
 *           properties:
 *                 id:
 *                       default: test1234
 *                       description: user 회원가입 id
 *                       type: string
 *                 pw:
 *                       default: gks12345678
 *                       description: user 회원 가입 비밀번호
 *                       type: string
 *                 name:
 *                       default: 한성재
 *                       description: user 회원 가입 이름
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
 *         description: 비밀번호는 20자리 미만으로 입력해주세요.
 *       "2008":
 *         description: user 이름을 입력해주세요
 *       "3000":
 *         description: 이미 존재하는 id입니다.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 */
userRouter.post("/", userController.postSignIn);

/**
 * @swagger
 * paths:
 *   /app/user/itemLike?userIdx={userIdx}&itemIdx={itemIdx}:
 *    post:
 *     tags: [회원 도메인 api]
 *     summary: 회원의 상품 좋아요 api
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: userIdx
 *         schema:
 *          type: integer
 *         description: 사용자 인덱스
 *         default: 1
 *       - in: query
 *         name: itemIdx
 *         schema:
 *          type: integer
 *         description: 상품 인덱스
 *         default: 1
 *
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2017":
 *         description: 상품의 인덱스를 입력해주세요.
 *       "2018":
 *         description: 사용자의 인덱스를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 *
 */

userRouter.post("/itemLike", userController.itemLike);

export default userRouter;
