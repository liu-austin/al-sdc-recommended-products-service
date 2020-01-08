// jshint esversion:6
const promise = require('bluebird'); // best promise library today
const pgp = require('pg-promise')({promiseLib: promise});
const sql = require('../helpers/helper');
const path = require('path');

async function createModel() {
    const connectionStringPg = 'postgres://localhost:5432/postgres';
    const connectionString = 'postgres://localhost:5432/sdc_pg';
    
    const dbPG = pgp(connectionStringPg);
    
    const createDBFullPath = path.join(__dirname, './createDb.sql');
    const createSchemaFullPath = path.join(__dirname, './createTable.sql');
    const createIndexFullPath = path.join(__dirname, './createIndex.sql');

    // const sqlDropDB = sql(dropDBFullPath);
    const sqlCreateDB = sql(createDBFullPath);
    // console.log(sqlCreateDB);
    const sqlCreateSchema = sql(createSchemaFullPath);
    // console.log(sqlCreateSchema);
    const sqlCreateIndex = sql(createIndexFullPath);
    
    try {
        await dbPG.none(sqlCreateDB);
        console.log('done creating db');
      } catch (error) {
        console.log(`error creating db: ${error}`);
      } finally {
        try {
          const dbPgSdc = pgp(connectionString);
          dbPgSdc.none(sqlCreateSchema)
          .then(() => {
            dbPgSdc.none(sqlCreateIndex);
          });
          console.log('done creating schema');
        } catch (error) {
          console.log(`error creating schema: ${error}`);
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
}

createModel();

