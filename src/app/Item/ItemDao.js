const selectUserPosts = async (connection) => {
  const selectTestUserQuery = `
        SELECT *
        FROM TestUser
        ;
      `;
  const [testResult] = await connection.query(selectTestUserQuery);

  return testResult;
};

const insertItem = async (connection, insertItemInfoParams) => {
  const insertItemQuery = `
  INSERT INTO Item(name, description, brand, price, size, color)
  VALUES (?, ?, ?, ?, ?, ?);
  `;

  const insertItemInfoRow = await connection.query(insertItemQuery, insertItemInfoParams);
  return insertItemInfoRow;
};

const selectItems = async (connection) => {
  const selectItemsQuery = `
        SELECT itemIdx,name
        FROM Item
        WHERE STATUS = "ACTIVE"
        ;
      `;
  const [itemResult] = await connection.query(selectItemsQuery);

  return itemResult;
};

const selectItem = async (connection, itemIdx) => {
  const selectItemQuery = `
        SELECT itemIdx,name,description,brand,price,size,color,status
        FROM Item
        WHERE itemIdx = ?
        ;
      `;
  const [itemResult] = await connection.query(selectItemQuery, [itemIdx]);

  return itemResult;
};

const editItem = async (connection, itemInfo) => {
  const editItemQuery = `
          UPDATE Item
          SET name = ? , description = ?, brand = ? , price = ? , size = ? , color = ?
          WHERE itemIdx = ?;
        ;
      `;

  const [itemResult] = await connection.query(editItemQuery, itemInfo);

  return itemResult;
};

const deleteItem = async (connection, itemInfo) => {
  const deleteItemQuery = `
          UPDATE Item
          SET status="DELETED"
          WHERE itemIdx = ?;
        ;
      `;

  const [itemResult] = await connection.query(deleteItemQuery, itemInfo);

  return itemResult;
};

export default { selectUserPosts, insertItem, selectItems, selectItem, editItem, deleteItem };
