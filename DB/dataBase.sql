CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE user (
  id_user INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(45) DEFAULT NULL,
  password INT(11) DEFAULT NULL, 
  PRIMARY KEY(id_user)
);

DESCRIBE user;

INSERT INTO user (name, password) VALUES
  ('Ryan Ray', '123456789'),
  ('Joe McMillan', '123456789'),
  ('John Carter', '123456789');

SELECT * FROM user;