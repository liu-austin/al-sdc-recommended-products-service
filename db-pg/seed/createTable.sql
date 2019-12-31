DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id serial primary key,
    itemname varchar(50) not null,
    itemimage varchar(85) not null,
    typesize varchar(50),
    price int,
    itemdescription varchar(150),
    rating numeric(2,1),
    numberratings int
);
