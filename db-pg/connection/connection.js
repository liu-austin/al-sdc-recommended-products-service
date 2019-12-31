// jshint esversion:6

const pg = require('pg');

const connectionString = `postgres://austinliu:@localhost:5432/sdc_pg`;

const pgClient = new pg.Client(connectionString);

module.exports = pgClient;

