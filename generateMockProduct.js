// jshint esversion:6
const faker = require('faker');

const typesize = [
    "10'x12'x5'",
    "9'x14'x6'",
    "15'x12'x6'",
    "18'x13'x5'",
    "5'x6'x4'",
    "9'x8'x3'",
    "10'x6'x3'",
    "12'x12'x5'",
    "9'x4'x5'",
    "7'x4'x4'",
    "14'x5'x6'"
];

const generateMockProduct = (userContext, events, done) => {
    let obj = {
        itemname: faker.commerce.productName(),
        itemimage: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/300`,
        typesize: typesize[Math.floor(Math.random() * typesize.length)],
        price: Math.floor(Math.random() * 500) + Math.floor(Math.random() * 500),
        itemdescription: faker.lorem.sentence(10),
        rating: Number(((Math.floor(Math.random() * 50) + 1) / 10).toFixed(1)),
        numberratings: Math.floor(Math.random() * 200)
    };
    userContext.vars.itemname = obj.itemname;
    userContext.vars.itemimage = obj.itemimage;
    userContext.vars.typesize = obj.typesize;
    userContext.vars.price = obj.price;
    userContext.vars.itemdescription = obj.itemdescription;
    userContext.vars.rating = obj.rating;
    userContext.vars.numberratings = obj.numberratings;
    return done();
};

module.exports = generateMockProduct;