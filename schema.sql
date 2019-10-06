Drop DATABASE If EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT AUTO_INCREMENT NOT NULL
product_name VARCHAR (255) NOT NULL,
department_name VARCHAR (255 NOT NULL),
price DECIMAL(10,2) NOT NULL,
stock_quantity INT (10) NOT NULL,
primary key (id)

);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("BMW", "Cars", 80000.00, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hiabusa", "Bikes", 20457.00, 3);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Rolex", "Jewlery", 80346.00, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mercedes", "Cars", 90058.00, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Iphone", "Electronics", 1505.00, 9);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Android", "Electronics", 750.00, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Air Jordans", "Apparel", 300.00, 7);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Maserati", "Cars", 125000.00, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Beats by Dre", "Electronics", 250.00, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dell PC", "Computers", 4500.00, 2)