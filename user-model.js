const AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-2" });
const TableName = "adventureuser";
const db = new AWS.DynamoDB.DocumentClient();

module.exports = {
  save: async user => {
    let params = {
      Item: user,
      TableName,
      ConsistentRead: true
    };

    return db.put(params).promise();
  },
  get: async id => {
    let params = {
      Key: {
        id
      },
      TableName,
      ConsistentRead: true
    };
    const query = await db.get(params).promise();
    return query.Item;
  }
};
