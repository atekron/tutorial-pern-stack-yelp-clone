-- \c datadase_name - connect to database
-- \l - list all databases
-- \d - list all tables
-- \d table_name - describe table

-- CREATE DATABASE database_name;
-- DROP DATABASE database-name;

-- CREATE TABLE table_name(); example:
CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  price INT,
  on_sale BOOLEAN
);

-- add column to table example:
ALTER TABLE products ADD COLUMN featured BOOLEAN;

-- drop column example:
ALTER TABLE products DROP COLUMN featured;

-- DROP TABLE table_name;

-- #############################################################################

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <=5)
);

INSERT INTO restaurants ( name, location, price_range)
VALUES ('mcdonalds', 'new york', 4), ('burger king', 'seatle', 3), ('pizza hut', 'san francisco', 1);

-- INSERT INTO restaurants ( name, location, price_range)
-- VALUES ('burger king', 'seatle', 3);

-- INSERT INTO restaurants ( name, location, price_range)
-- VALUES ('pizza hut', 'san francisco', 1);

-- #############################################################################

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL CHECK(rating >= 1 AND rating <=5)
);

INSERT INTO reviews (name, restaurant_id, review, rating)
VALUES ('Alynosa', 25, 'not bad food', 3),
('Arilen', 28, 'just an awesome place!', 5),
('Victor Newton', 28, 'I had eat in worse places, but not often', 1);

-- #############################################################################

SELECT * FROM restaurants
LEFT JOIN
(SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;