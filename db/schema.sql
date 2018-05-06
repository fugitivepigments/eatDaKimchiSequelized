-- Create the database day_planner_db and specified it for use.
CREATE DATABASE kimchi_db;
USE kimchi_db;

-- Create the table plans.
CREATE TABLE kindsOfKimchi
(
id int NOT NULL AUTO_INCREMENT,
kimchi_name varchar(255) NOT NULL,
gobbled TINYINT(1) NOT NULL DEFAULT '1',
PRIMARY KEY (id)
);
