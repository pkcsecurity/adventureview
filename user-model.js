const AWS = require('aws-sdk');
const TableName = 'adventureuser';
const db = new AWS.DynamoDB.DocumentClient();

module.exports = {
    async save: (user) => {
        let params = {
            Item: user, 
            TableName
        }; 
           
        return db.put(params).promise();
    },
    async get: (id) => {
        let params = {
            Key: {
                id
            }, 
            TableName
        }; 
        const query = db.get(params).promise();
        return query.Item;
    }
}