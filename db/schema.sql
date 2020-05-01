### Schema

CREATE DATABASE pets_db;
USE pets_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)
);
