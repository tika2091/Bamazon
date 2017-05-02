CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(

			id INTEGER (100) NOT NULL AUTO_INCREMENT,
			product_name VARCHAR (100),
			department_name VARCHAR (100),
			price DECIMAL( 10, 5),
         stock_quantity INTEGER(100),
			PRIMARY KEY (id)
);

SELECT * FROM products; 
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("coloring_pen", "urtchart", 10.50, 5),
VALUES ("shampoo", "tkt_salon", 23.50, 2),
VALUES ("coloring_pen", "urtchart", 10.50, 5),
VALUES ("coloring_pen", "urtchart", 20.00, 3),
VALUES ("spray", "tkt_salon", 25.99, 10),
VALUES ("hunger games", "amazon", 13.99, 2),
VALUES ("coloring_pen", "urtchart", 10.50, 5),
VALUES ("cook book", "barnes and noble", 34.50, 3),
VALUES ("rice_cooker", "amazon", 25.50, 1),