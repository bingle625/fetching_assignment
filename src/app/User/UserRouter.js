import express from "express";
import { getTest, postTest, getDatabaseTest } from "./UserController";
const userRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/user:
 *   get:
 *     tags: [user]
 *     summary: 테스트
 *     responses:
 *       "1000":
 *         description: GET 테스트 API 성공
 *   post:
 *     tags: [user]
 *     summary: 테스트
 *     parameters:
 *       - name: parameter
 *         in: Post
 *         type: parameter type
 *         description: 파라미터 설명
 *     responses:
 *       "1000":
 *         description: POST 테스트 API 성공
 *       "2000":
 *         description: 잘못된 파라메타 전달
 *
 */
userRouter.get("/", getTest).post("/", postTest);
userRouter.get("/db", getDatabaseTest);
export default userRouter;
