const AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-2" });
const TableName = process.env.USERS_TABLE || "adventureview";
let db = new AWS.DynamoDB.DocumentClient();
if (process.env.IS_OFFLINE) {
  db = new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000"
  });
}

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
  },
  currentLocation: user => {
    return user.locationHistory[user.locationHistory.length - 1];
  }
};
