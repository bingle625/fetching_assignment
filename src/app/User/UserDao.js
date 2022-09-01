//user 레코드 생성
const insertUserInfo = async (connection, insertUserInfoParams) => {
  const insertUserQuery = `
  INSERT INTO User(id, pw, name)
  VALUES (?, ?, ?);
  `;

  const insertUserInfoRow = await connection.query(insertUserQuery, insertUserInfoParams);
  return insertUserInfoRow;
};

const insertLikeInfo = async (connection, insertLikeInfoParams) => {
  const insertLikeQuery = `
  INSERT INTO ItemLike(userIdx, itemIdx)
  VALUES (?, ?);
  `;

  const insertUserInfoRow = await connection.query(insertLikeQuery, insertLikeInfoParams);
  return insertUserInfoRow;
};

module.exports = { insertUserInfo, insertLikeInfo };
