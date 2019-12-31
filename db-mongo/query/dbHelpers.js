// jshint esversion:6
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');
// const dbConnection = new require('../connection/connection')();

const dbHelpers = {
    getAll: function(cb) {
        const dbConnection = mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err, client) => {
            const db = client.db('sdc_mongo');
            console.log('Connection established to', url);
            const collection = db.collection('products');
            assert.equal(null, err);
            collection.find().toArray((err, items) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, items);
                    client.close();
                }
            });
      });
    },
    getOne: function(id, cb) {
        const dbConnection = mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err, client) => {
            const db = client.db('sdc_mongo');
            console.log('Connection established to', url);
            const collection = db.collection('products');
            assert.equal(null, err);
            collection.find({id: id}).toArray((err, items) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, items);
                    client.close();
                }
            });
      });
    },
    postOne: function(body, cb) {
        const dbConnection = mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err, client) => {
            const db = client.db('sdc_mongo');
            console.log('Connection established to', url);
            const collection = db.collection('products');
            assert.equal(null, err);
            collection.insertOne(body, (err, items) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, items);
                    client.close();
                }
            });
      });
    },
    updateOne: function(id, body, cb) {
        const dbConnection = mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err, client) => {
            const db = client.db('sdc_mongo');
            console.log('Connection established to', url);
            const collection = db.collection('products');
            assert.equal(null, err);
            collection.updateOne({id: id}, {'$set': body}, (err, item) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, item);
                    client.close();
                }
            });
      });
    },
    deleteOne: function(id, cb) {
        const dbConnection = mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err, client) => {
            const db = client.db('sdc_mongo');
            console.log('Connection established to', url);
            const collection = db.collection('products');
            assert.equal(null, err);
            collection.deleteOne({id: id}, (err, item) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, item);
                    client.close();
                }
            });
      });
}};


module.exports = dbHelpers;