import express from "express";
const itemController = require("./ItemController");
const itemRouter = express.Router();

/**
 * @swagger
 * paths:
 *  /app/item:
 *
 *   get:
 *     tags: [상품 도메인 api]
 *     summary: 상품 전체조회 api
 *     consumes:
 *       - application/json
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 *   post:
 *     tags: [상품 도메인 api]
 *     summary: 상품 생성 api
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: body
 *        name: itemInfo
 *        description: 상품 정보  파라미터
 *        schema:
 *           type: object
 *           required:
 *             - name
 *             - description
 *             - brand
 *             - price
 *             - size
 *             - color
 *           properties:
 *                 name:
 *                       default: 그린 크루넥 맨투맨 (CRW EUCALYPTUS GREEN)
 *                       description: 상품 이름
 *                       type: string
 *                 description:
 *                       default: test 설명
 *                       description: 상품 설명
 *                       type: string
 *                 brand:
 *                       default: ACNE STUDIOS
 *                       description: 상품 브랜드명
 *                       type: string
 *                 price:
 *                       default: 194768
 *                       description: 상품 가격
 *                       type: integer
 *                 size:
 *                       default: L
 *                       description: 상품 사이즈
 *                       type: string
 *                 color:
 *                       default: blue
 *                       description: 상품 색상
 *                       type: string
 *
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2011":
 *         description: 상품의 이름을 입력해주세요.
 *       "2012":
 *         description: 상품의 상세설명을 입력해주세요.
 *       "2013":
 *         description: 상품의 브랜드를 입력해주세요.
 *       "2014":
 *         description: 상품의 가격을 입력해주세요.
 *       "2015":
 *         description: 상품의 사이즈를 입력해주세요.
 *       "2016":
 *         description: 상품의 크기를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 */
itemRouter.get("/", itemController.retrieveItems).post("/", itemController.createItem);

/**
 * @swagger
 * paths:
 *  /app/item/filter?&color={color}&brand={brand}&size={size}:
 *
 *   get:
 *     tags: [상품 도메인 api]
 *     summary: 상품 필터링 조회 api
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: color
 *         schema:
 *          type: string
 *         description: 조회 색상
 *         default: blue
 *       - in: query
 *         name: brand
 *         schema:
 *          type: string
 *         description: 조회 브랜드
 *         default: ACNE STUDIOS
 *       - in: query
 *         name: size
 *         schema:
 *          type: string
 *         description: 조회 사이즈
 *         default: L
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2001":
 *         description: id를 입력해주세요.
 *       "2013":
 *         description: 상품의 브랜드를 입력해주세요.
 *       "2014":
 *         description: 상품의 가격을 입력해주세요.
 *       "2015":
 *         description: 상품의 사이즈를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 */
itemRouter.get("/filter", itemController.retrieveItemsByFilter);

/**
 * @swagger
 * paths:
 *  /app/item/{id}:
 *
 *   get:
 *     tags: [상품 도메인 api]
 *     summary: 상품 상세 조회 api
 *     parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                 type: integer
 *              default: 1
 *              required: true
 *              description: 상품 인덱스
 *     consumes:
 *       - application/json
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2017":
 *         description: 상품의 인덱스를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 *
 *   patch:
 *     tags: [상품 도메인 api]
 *     summary: 상품 수정 api
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: integer
 *        default: 1
 *        required: true
 *        description: 상품 인덱스
 *      - in: body
 *        name: itemInfo
 *        description: 상품 정보 파라미터
 *        schema:
 *           type: object
 *           required:
 *             - name
 *             - description
 *             - brand
 *             - price
 *             - size
 *             - color
 *           properties:
 *                 name:
 *                       default: 그린 크루넥 맨투맨2 (CRW EUCALYPTUS GREEN)
 *                       description: 상품 이름
 *                       type: string
 *                 description:
 *                       default: test 설명
 *                       description: 상품 설명
 *                       type: string
 *                 brand:
 *                       default: ACNE STUDIOS
 *                       description: 상품 브랜드명
 *                       type: string
 *                 price:
 *                       default: 194768
 *                       description: 상품 가격
 *                       type: integer
 *                 size:
 *                       default: L
 *                       description: 상품 사이즈
 *                       type: string
 *                 color:
 *                       default: blue
 *                       description: 상품 색상
 *                       type: string
 *
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2011":
 *         description: 상품의 이름을 입력해주세요.
 *       "2012":
 *         description: 상품의 상세설명을 입력해주세요.
 *       "2013":
 *         description: 상품의 브랜드를 입력해주세요.
 *       "2014":
 *         description: 상품의 가격을 입력해주세요.
 *       "2015":
 *         description: 상품의 사이즈를 입력해주세요.
 *       "2016":
 *         description: 상품의 크기를 입력해주세요.
 *       "2017":
 *         description: 상품의 인덱스를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 *
 */
itemRouter.get("/:id", itemController.retrieveItemDetail).patch("/:id", itemController.patchItem);

/**
 * @swagger
 * paths:
 *  /app/item/status/{id}:
 *   patch:
 *     tags: [상품 도메인 api]
 *     summary: 상품 삭제 api
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: integer
 *        default: 1
 *        required: true
 *        description: 상품 인덱스
 *
 *     responses:
 *       "1000":
 *         description: API 성공
 *       "2017":
 *         description: 상품의 인덱스를 입력해주세요.
 *       "4000":
 *         description: 데이터 베이스 에러
 *
 *
 */
itemRouter.patch("/status/:id", itemController.deleteItem);
//todo: 상품 상세조회에 좋아요 개수 추가

export default itemRouter;
