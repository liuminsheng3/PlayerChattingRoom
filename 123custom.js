const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event, context, callback) => {
  console.log(event.request.userAttriutes);
  if(!event?.request?.userAttributes?.sub){
    console.log('No sub provider');
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    __typename :{S: "User"},
    _lastChangedAt: {N: timestamp.toString()},
    _version: {N: "1"},
    createdAt: {S: now.toISOString() },
    updatedAt: {S: now.toISOString() },
    id: {S: event.request.userAttributes.sub },
    name: {S: event.request.userAttributes.username},
    email: {S: event.request.userAttributes.email},
    imageUrl:{S: "https://i.stack.imgur.com/l60Hf.png"}
  }
  
  const params = {
    Item: userItem,
    TableName: tableName
  }
  try{
    await ddb.putItem(params).promise();
    console.log("success");
  }catch (e){
    console.log(e);
  }

};
