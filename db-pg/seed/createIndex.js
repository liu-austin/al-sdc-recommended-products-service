// jshint esversion:6
const promise = require('bluebird'); // best promise library today
const pgp = require('pg-promise')({promiseLib: promise});
const sql = require('../helpers/helper');
const path = require('path');

async function createModel() {
    // const connectionStringPg = 'postgres://localhost:5432/postgres';
    const connectionString = 'postgres://localhost:5432/sdc_pg';
    
    // const dbPG = pgp(connectionStringPg);
    
    const createIndexFullPath = path.join(__dirname, './createIndex.sql');

    const sqlCreateIndex = sql(createIndexFullPath);
    
    try {
        const dbPgSdc = pgp(connectionString);
        dbPgSdc.none(sqlCreateIndex);

        console.log('done creating index');
    } catch (error) {
        console.log(`error creating index: ${error}`);
    } finally {
        try {
        // const dbPgSdcPrime = pgp(connectionString);
        // await dbPgSdcPrime.none(sqlCreateIndex);
        // console.log('done creating index on Id');
        } catch (error) {
        // console.log(`error creating index: ${error}`);
        }
    }
}

createModel();

