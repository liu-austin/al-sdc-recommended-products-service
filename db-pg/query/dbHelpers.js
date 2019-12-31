// jshint esversion:6
const pgClient = require('../connection/connection');
console.log('DB connected');
pgClient.connect();

const dbHelpers = {
    getAll: function(cb) {
        pgClient.query(`select * from products limit 25`, (err, results) => {
            if (err) {
                cb(err);
            } else {
                cb(null, results);
            }
        });
        pgClient.on('end', () => {pgClient.end();});
    },
    getOne: function(id, cb) {
        pgClient.query(`select * from products where id=${id}`, (err, results) => {
            if (err) {
                cb(err);
            } else {
                cb (null, results);
            }
        });
        pgClient.on('end', () => {pgClient.end();});
    },
    postOne: function(body, cb) {
        console.log(body);
        pgClient.query(`insert into products (itemname, itemimage, typesize, price, itemdescription, rating, numberratings) values ('${body.itemname}', '${body.itemimage}', '${body.typesize}', ${body.price}, '${body.itemdescription}', ${body.rating}, ${body.numberratings})`, (err, results) => {
            if (err) {
                cb(err);
            } else {
                cb(null, results);
            }
        });
        pgClient.on('end', () => {pgClient.end();});
    },
    updateOne: function(id, body, cb) {
        pgClient.query(`update products set itemname = '${body.itemname}', itemimage = '${body.itemimage}', typesize = '${body.typesize}', price = ${body.price}, itemdescription = '${body.itemdescription}', rating = ${body.rating}, numberratings = ${body.numberratings} where id = ${id}`, (err, results) => {
            if (err) {
                cb(err);
            } else {
                cb(null, results);
            }
        });
        pgClient.on('end', () => {pgClient.end();});
    },
    deleteOne: function(id, cb) {
        pgClient.query(`delete from products where id = ${id}`, (err, results) => {
            if (err) {
                cb(err);
            } else {
                cb(null, results);
            }
        });
        pgClient.on('end', () => {pgClient.end();});
    }
};


module.exports = dbHelpers;