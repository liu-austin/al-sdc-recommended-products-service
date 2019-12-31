// jshint esversion:6
const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const instream = fs.createReadStream("out.csv");
const path = require('path');
const csv = require('fast-csv');
// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost:27017";
const filePath = path.join(__dirname, './out.csv');
let count = 0;
let batch = [];

// fs.createReadStream(filePath)
//   .pipe(csv.parse({ headers: true }))
//   .on('data', row => console.log(row));
  
mongodb.connect(url, function (err, client) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    const db = client.db('sdc_mongo');
    console.log('Connection established to', url);
    const collection = db.collection('products');
    console.time('seedDb');
    readData = fs.createReadStream(filePath).pipe(csv.parse({headers: true}))
      .on('data',function(data){
        ++count;
        batch.push(data);
        if (count % 10000 === 0) {
          try {
            collection.insertMany(batch);
          } catch (err) {
            console.log(err);
          } finally {
            batch = [];
          }
        }
      })
      .on('end',function(data){
        console.timeEnd('seedDb');
        client.close();
      });
  }
}); //End of Mongo connect