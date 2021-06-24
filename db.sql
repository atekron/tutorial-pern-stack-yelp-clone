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

CREATE TABLE restaurants (
  id INT,
  name VARCHAR(50),
  location VARCHAR(50),
  price_range INT
);

INSERT INTO restaurants (id, name, location,price_range)
VALUES (123, 'mcdonalds', 'new york', 3);