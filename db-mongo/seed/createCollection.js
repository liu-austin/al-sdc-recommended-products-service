// jshint esversion:6
// const dbConnection = require('../connection/connection');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');

const createCollection = function seedDb() {
    const dbConnection = mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, client) => {
      assert.equal(null, err);
      console.log("Connected successfully to server");
    //...
      const db = client.db('sdc_mongo');
  
      const collection = db.createCollection('products', (err, res) => {
          if (err) {
              console.log(err);
          } else {
              console.log('Collection "products" created');
          }
      });
  
      client.close();
  
  });
};

createCollection();