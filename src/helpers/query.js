import { MongoClient } from 'mongodb';
import { database } from '../config.json';
const{ url, databaseName } = database;

const connectDB = ({collection, callback}) => {
    MongoClient.connect(url, function(err, client) {
      const db = client.db(databaseName);
      const cursor = db.collection(collection);
      callback(cursor);
    });
}

const resultSet = ({success, failure}) => {
  return (err, data) => {
    if(err) {
      failure(err);
      return;
    }
    success(data);
  }
}

export const find = ({collection, ...params }) => {
  const callback = (cursor) => {
    cursor.find({}).toArray(resultSet(params));
  }
  connectDB({collection, callback });
}
