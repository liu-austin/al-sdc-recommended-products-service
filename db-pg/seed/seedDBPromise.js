// jshint esversion:6
// const pgp = require('pg-promise')({promiseLib: promise});
const fs = require('fs');
const { db, pgp } = require('../connection/connectionPromise');
const path = require('path');
// const split = require('split');
const csv = require('fast-csv');
// const through2 = require('through2');
const filePath = path.join(__dirname, './out.csv');
var cs = new pgp.helpers.ColumnSet([
  'id',
  'itemname',
  'itemimage',
  'typesize',
  'price',
  'itemdescription',
  'rating',
  'numberratings'
], {table: 'products'});

// async function seedModel() {
//   let count = 0;
//   let batch = [];
//   const stream = fs.createReadStream('out.csv')
//   .pipe(csv.createStream({
//       endLine : '\n',
//       columns : ['id', 'itemname', 'itemimage', 'typesize', 'price', 'itemdescription', 'rating', 'numberratings'],
//       escapeChar : '"',
//       enclosedChar : '"'
//   }))
//   .pipe(through2({ objectMode: true }, (row, enc, cb) => {

//     // - `row` holds the first row of the CSV,
//     //   as: `{ Year: '1997', Make: 'Ford', Model: 'E350' }`
//     // - The stream won't process the *next* item unless you call the callback
//     //  `cb` on it.
//     // - This allows us to save the row in our database/microservice and when
//     //   we're done, we call `cb()` to move on to the *next* row.
//     if (row.id % 10000 === 0) {

//     } else {
//       batch.push(row);
//     }

//     saveIntoDatabase(row).then(() => {
//       cb(null, true);
//     })
//     .catch(err => {
//       cb(err, null);
//     })}))
//   // .on('data', data => {
//   //   console.log('saved a row');
//   // })
//   .on('end', () => {
//     console.log('end');
//   })
//   .on('error', err => {
//     console.error(err);
//   });

// Mock function that emulates saving the row into a database,
// asynchronously in ~500 ms
  // const saveIntoDatabase = batch => {
  //   return Promise((resolve, reject) => {
  //     resolve(pgp.helpers.insert(batch, cs));
  //   });
  // };

// seedModel();

// function getNextInsertBatch(index) {
  // retrieves the next data batch, according to the index, and returns it
  // as an array of objects. A normal batch size: 1000 - 10,000 objects,
  // depending on the size of the objects.
  //
  // returns null when there is no more data left.
// }

// db.tx('massive-insert', t => {
//   return t.sequence(index => {
//       return getNextInsertBatch(index)
//           .then(data => {
//               if (data) {
//                   const inserts = pgp.helpers.insert(data, cs);
//                   return t.none(inserts);
//               }
//           });
//   });
// })
//   .then(data => {
//       console.log('Total batches:', data.total, ', Duration:', data.duration);
//   })
//   .catch(error => {
//       console.log(error);
//   });
  let count = 0;
  let batch = [];

  console.log('begin seeding');
  console.time('seedDb');
  readData = fs.createReadStream(filePath).pipe(csv.parse({headers: true}))
    .on('data',function(data){
      ++count;
      batch.push(data);
      if (count % 10000 === 0) {
        try {
          pgp.helpers.insert(batch, cs);
          batch = [];
        } catch (err) {
          console.log(err);
        } 
      }
    })
    .on('end',function(data){
      console.timeEnd('seedDb');

    });
