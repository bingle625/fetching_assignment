import express from "express";
import { getTest, postTest, getDatabaseTest } from "./ItemController";
const itemRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/item:
 *   get:
 *     tags: [item]
 *     summary: 테스트
 *     responses:
 *       "1000":
 *         description: GET 테스트 API 성공
 *   post:
 *     tags: [item]
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
itemRouter.get("/", getTest).post("/", postTest);
itemRouter.get("/db", getDatabaseTest);
export default itemRouter;
