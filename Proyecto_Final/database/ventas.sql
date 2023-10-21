CREATE DATABASE base;

use base;

CREATE table ventas (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(50) NOT NULL,
  cantidad INT NOT NULL,
  precio DECIMAL(10,2),
  total DECIMAL (10,2) AS ( cantidad * precio)
 );

 SHOW TABLES;

 DESCRIBE ventas;

