// jshint esversion:6

const fs = require('fs');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const generateMockProduct = require('./generateMockProduct');


const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'itemname', title: 'itemname' },
    { id: 'itemimage', title: 'itemimage' },
    { id: 'typesize', title: 'typesize' },
    { id: 'price', title: 'price' },
    { id: 'itemdescription', title: 'itemdescription' },
    { id: 'rating', title: 'rating' },
    { id: 'numberratings', title: 'numberratings'}
  ]
});

let recSeeder = (batch) => {
    let recSeeds = [];
    for (let i = 1; i <= 10000; i++) {
        recSeeds.push(generateMockProduct((batch - 1) * 10000 + i));
    }
    return recSeeds;
};

let batches = 0;
let append = () => {
  if (batches < 1000) {
    batches += 1;
    console.log(batches);
    let data = recSeeder(batches);
    csvWriter.writeRecords(data).then(() => append());
  } else {
    console.timeEnd('writeCSV');
    console.log('The CSV file was written successfully');
  }
};

console.time('writeCSV');
append();

