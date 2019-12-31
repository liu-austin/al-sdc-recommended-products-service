// const Product = require('./index.js');
// const Products = Product.Product;
const db = require("./index.js");
const mongoose = require("mongoose");

const images = [
  "https://i.ibb.co/ZMcjVKY/bekant-desk-0736386-PE740515-S5.png",
  "https://i.ibb.co/R7TNM1D/ekedalen-bar-table-brown-0657862-PE709998-S5.png",
  "https://i.ibb.co/CsqYFFr/ekedalen-extendable-table-0736965-PE740829-S5.png",
  "https://i.ibb.co/7CpcxHC/gamleby-gateleg-table-light-antique-stain-grey-0737081-PE740873-S5.jpg",
  "https://i.ibb.co/tH2QbqW/ingatorp-extendable-table-0737091-PE740881-S5.jpg",
  "https://i.ibb.co/PTBQw2V/ingatorp-extendable-table-0623225-PE691010-S5.png",
  "https://i.ibb.co/yX4LMDp/ingatorp-extendable-table-black-0737090-PE740880-S5.png",
  "https://i.ibb.co/0ZMfjRT/laneberg-extendable-table-white-0722925-PE733775-S5.png",
  "https://i.ibb.co/fSRs81K/lerhamn-table-0238239-PE377693-S5.png",
  "https://i.ibb.co/5rfT154/lerhamn-table-and-4-chairs-0247205-PE386033-S5.png",
  "https://i.ibb.co/TrjP7S7/lisabo-table-ash-veneer-0737105-PE740883-S5.png",
  "https://i.ibb.co/KsDDrRs/markerad-table-0733212-PE739320-S5.png",
  "https://i.ibb.co/vs2KYGh/markerad-rug-low-pile-white-black-0684967-PE721294-S5.png",
  "https://i.ibb.co/vB1KnWc/moerbylanga-table-0737109-PE740887-S5.png",
  "https://i.ibb.co/s2KN4cY/moeckelby-table-oak-0737107-PE740885-S5.png",
  "https://i.ibb.co/V3RFSBm/nordviken-extendable-table-0714215-PE729969-S5.jpg",
  "https://i.ibb.co/GvW339C/norden-extendable-table-birch-0737111-PE740889-S5.png",
  "https://i.ibb.co/wyWG6gk/oevraryd-janinge-table-and-4-chairs-white-bamboo-white-0445262-PE595660-S5.png",
  "https://i.ibb.co/C1zsvw8/skogsta-dining-table-acacia-0546603-PE656255-S5.png",
  "https://i.ibb.co/7YHmRxs/slaehult-table-0737357-PE741014-S5.png",
  "https://i.ibb.co/jw28WnW/tingby-table-white-0737124-PE740897-S5.png",
  "https://i.ibb.co/f93ymYd/torsby-table-chrome-plated-high-gloss-white-0737361-PE741017-S5.png",
  "https://i.ibb.co/3kzkhn1/ypperlig-bench-beech-0505369-PE633890-S5.png",
  "https://i.ibb.co/qp5fjw7/ypperlig-chair-with-armrests-in-outdoor-green-0505332-PE633865-S5.png",
  "https://i.ibb.co/D7KzKWy/ypperlig-nilsove-table-and-4-chairs-0720682-PE732748-S5.png",
  "https://i.ibb.co/9pnfzFJ/ypperlig-stool-beech-0505275-PE633814-S5.png",
  "https://i.ibb.co/88Sr2nb/ypperlig-table-0737127-PE740896-S5.png",
  "https://i.ibb.co/j5qmcjv/moerbylanga-bernhard-table-and-6-chairs-0737502-PE741141-S5.png",
  "https://i.ibb.co/gFtPqnq/skogsta-norraryd-table-and-6-chairs-acacia-black-0549135-PE657574-S5.jpg",
  "https://i.ibb.co/Mc02sP4/nordviken-leifarne-table-and-6-chairs-black-light-olive-green-black-0747744-PE744714-S5.png",
  "https://i.ibb.co/pdqGwQ3/nordviken-leifarne-table-and-6-chairs-white-dark-yellow-white-0747486-PE744558-S5.jpg",
  "https://i.ibb.co/NL9smj9/skogsta-sakarias-table-and-4-chairs-0680680-PE719886-S5.png",
  "https://i.ibb.co/gj4xnsr/ingatorp-ingolf-table-and-6-chairs-0659758-PE710938-S5.jpg",
  "https://i.ibb.co/zPh3wKH/laneberg-ekedalen-table-and-4-chairs-0754618-PE747985-S5.png",
  "https://i.ibb.co/KL9Pcxb/jokkmokk-table-and-4-chairs-antique-stain-0736929-PE740809-S5.png",
  "https://i.ibb.co/BfkVX1C/laneberg-karljan-table-and-4-chairs-0744786-PE743398-S5.jpg",
  "https://i.ibb.co/6tL6Stg/ekedalen-chair-0773741-PE756379-S5.jpg",
  "https://i.ibb.co/ZgPb31h/leifarne-chair-dark-yellow-broringe-chrome-plated-0745127-PE743588-S5.png",
  "https://i.ibb.co/ySkcn06/karljan-chair-0714675-PE730182-S5.png",
  "https://i.ibb.co/QnddFw5/fjaellberget-conference-chair-0724716-PE734599-S5.png"
];
const productname = [
  "YPPERLIG",
  "TINGBY",
  "MORBYLANGA",
  "EKEDALEN",
  "MARKERAD",
  "GAMLEBY",
  "TORSBY",
  "KEJSARKRONA",
  "YPPERLIGGY",
  "BEKANT",
  "LISABO",
  "BENCH",
  "NILSOVE",
  "YPPERLIG",
  "EKEDALENA",
  "MOCKLEBY",
  "DRAGONITE",
  "GENGAR",
  "PIKACHU",
  "SQUIRTLE",
  "CHARMANDER",
  "BULBASAUR",
  "JIGGLYPUFF",
  "JIIGGLYPUFF",
  "DITTOPUFF",
  "DIITTOPUFF",
  "JJIGGLYPUFF"
];
const adj = [
  "SHINY",
  "RARE",
  "COMMON",
  "UNCOMMON",
  "FIRE",
  "WATER",
  "GRASS",
  "ELECTRIC",
  "GHOST",
  "PSYCHIC",
  "FIGHTING",
  "BUG",
  "FAIRY",
  "STEEL",
  "POISON",
  "FLYING",
  "DRAGON",
  "NORMAL",
  "DARK",
  "ROCK",
  "ICE",
  "GROUND"
]; 
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
const description = [
  "goes well with garden",
  "comfortable",
  "lol why are  you even looking at this",
  "table/chair piece",
  "you will like this",
  "you can afford this",
  `don't let the price stop you`,
  "lmao I have one at home",
  "this might not be a good idea",
  "this a good idea",
  "look for a matching set",
  "mm this is cute",
  "summer vibes",
  "will you use this lol",
  `you probably won't ever use this`,
  "wait lol what??",
  "this is nice",
  "niiiiice",
  `this ain't a bad idea`,
  "this goes haaaaard"
];
const price = [
  299.99,
  199.99,
  200.0,
  799.99,
  79.99,
  399.99,
  575.0,
  275.99,
  799.99,
  150.0,
  675.99,
  255.99,
  400.0,
  300.0,
  99.99
];
const ratings = [
  2.1,
  2.2,
  2.5,
  2.7,
  3.6,
  3.1,
  3.5,
  3.8,
  4.4,
  4,
  2,
  4.5,
  4.6,
  4.9
];
const numberRatings = [
  23,
  43,
  12,
  32,
  67,
  47,
  39,
  18,
  21,
  37,
  48,
  26,
  53,
  28,
  26,
  19,
  16,
  36,
  41
];

const data = [];

const createProducts = () => {
  for (var i = 0; i < 50; i++) {
    data.push({
      itemimage: images[Math.floor(Math.random() * images.length)],
      itemname:
        adj[Math.floor(Math.random() * adj.length)] +
        " " +
        productname[Math.floor(Math.random() * productname.length)],
      typesize: typesize[Math.floor(Math.random() * typesize.length)],
      description: description[Math.floor(Math.random() * description.length)],
      price: price[Math.floor(Math.random() * price.length)],
      rating: ratings[Math.floor(Math.random() * ratings.length)],
      numberRatings:
        numberRatings[Math.floor(Math.random() * numberRatings.length)]
    });
  }
};

const seedDatabase = products => {
  // db.deleteAll();
  db.save(products, (err, results) => {
    console.log(`creating products`);
    if (err) {
      console.error(err);
    }
    mongoose.connection.close();
  });
};

createProducts();
db.deleteAll();
seedDatabase(data);
