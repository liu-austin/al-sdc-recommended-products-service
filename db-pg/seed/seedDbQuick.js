// jshint esversion:6
const path = require('path');
const { Pool, Client} = require('pg');
const config = require('./config.json');
var targetTable = 'products';

const host = config.host;
const user = config.user;
const db = config.db;
const port = config.port;
const conString = `postgres://${user}:@${host}:${port}/${db}`;
const csvPath = path.join(__dirname, './out.csv');

const client = new Client(conString);

client.connect();

client.query(`COPY ${targetTable} (id, itemname, itemimage, typesize, price, itemdescription, rating, numberratings) FROM '${csvPath}' DELIMITER ',' CSV HEADER`);

client.on('end', () => { client.end(); });
