// jshint esversion:6
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');

const dbConnection = mongo.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  //...
    // const db = client.db('sdc_mongo');

    // const collection = db.collection('products');

    // client.close();

});


// const dbConnection = function dbConnection() {
//   var _this = this;
//   var options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   };
//   _this.mongoClient = new mongo(url, options);
//   return new Promise(function(resolve, reject) {
//       _this.mongoClient.connect(function(err, client) {
//           assert.equal(err, null);
//           console.log("mongo client successfully connected \n");
//           _this.dbConnection = _this.mongoClient.db('sdc_mongo');
//           resolve(_this);
//       });
//   });
// };

module.exports = dbConnection;