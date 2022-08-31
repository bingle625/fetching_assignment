import express from "express";
import { getTest, postTest, getDatabaseTest } from "./AuthController";
const authRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/auth:
 *   get:
 *     tags: [auth]
 *     summary: 테스트
 *     responses:
 *       "1000":
 *         description: GET 테스트 API 성공
 *   post:
 *     tags: [auth]
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
authRouter.get("/", getTest).post("/", postTest);
authRouter.get("/db", getDatabaseTest);
export default authRouter;
