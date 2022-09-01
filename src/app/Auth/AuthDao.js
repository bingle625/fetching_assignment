const selectUserPosts = async (connection) => {
  const selectTestUserQuery = `
        SELECT *
        FROM TestUser
        ;
      `;
  const [testResult] = await connection.query(selectTestUserQuery);

  return testResult;
};

//user id 조회
const selectUserId = async (connection, id) => {
  const selectUserIdQuery = `
        SELECT id
        From User
        WHERE id =?
  `;
  const selectUserIdRow = await connection.query(selectUserIdQuery, [id]);
  return selectUserIdRow;
};

//user 비밀번호 조회
const selectUserPassword = async (connection, id) => {
  const selectUserPasswordQuery = `
      SELECT userIdx, pw
      FROM User
      WHERE id = ?;
  `;
  const selectUserPasswordRow = await connection.query(selectUserPasswordQuery, [id]);
  return selectUserPasswordRow;
};

//user 계정 상태 조회
const selectUserAccount = async (connection, id) => {
  const selectUserAccountQuery = `
      SELECT status, userIdx
      FROM User
      WHERE id = ?;

  `;
  const selectUserAccountRow = await connection.query(selectUserAccountQuery, id);
  return selectUserAccountRow;
};

module.exports = { selectUserPosts, selectUserId, selectUserPassword, selectUserAccount };
