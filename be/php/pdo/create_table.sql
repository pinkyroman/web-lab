use testbed;
CREATE TABLE dishes (
	dish_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	dish_name VARCHAR(255),
	price DECIMAL(4,2),
	is_spicy INT
);