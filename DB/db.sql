CREATE DATABASE instalandoCaliMainDB;

USE instalandoCaliMainDB;

CREATE TABLE users (
    date_creation DATETIME NOT NULL,
    email VARCHAR(30) NOT NULL PRIMARY KEY,
    rol VARCHAR(15) NOT NULL,
    name VARCHAR(15) NOT NULL,
    password VARCHAR(70) NOT NULL,
    orders_id INT(10)
);

CREATE TABLE anjeos_light (
    order_owner_id INT(10) NOT NULL,
    anjeo_light_id INT(10) NOT NULL  AUTO_INCREMENT PRIMARY KEY,
    date_creation DATETIME NOT NULL,
    color TEXT(8) NOT NULL,
    profile_type TEXT(8) NOT NULL,
    opening TEXT(16) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT(10) NOT NULL,
    height FLOAT(10) NOT NULL,
    guide FLOAT(10) NOT NULL,
    installation TEXT(7) NOT NULL,
    divisorHigh FLOAT(10) NOT NULL,
    angle TEXT(10) NOT NULL,
    notes VARCHAR(200)
);

CREATE TABLE anjeos_heavy (
    order_owner_id INT(10) NOT NULL,
    anjeo_heavy_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_creation DATETIME NOT NULL,
    color TEXT(8) NOT NULL,
    profile_type TEXT(12) NOT NULL,
    opening TEXT(16) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT(10) NOT NULL,
    height FLOAT(10) NOT NULL,
    head FLOAT(10) NOT NULL,
    adaptador FLOAT(10) NOT NULL,
    top_profile FLOAT(10) NOT NULL,
    installation TEXT(10) NOT NULL,
    divisorHigh FLOAT(10) NOT NULL,
    type_handle TEXT(12) NOT NULL,
    open_direction TEXT(9) NOT NULL,
    notes VARCHAR(200)
);

CREATE TABLE orders (
    user_owner_email VARCHAR(30) NOT NULL,
    order_id INT(10) NOT NULL PRIMARY KEY,
    date_creation DATETIME NOT NULL,
    status TEXT(10) NOT NULL,
    anjeos_light_id INT(10),
    anjeos_heavy_id INT(10)
);

ALTER TABLE users
    ADD CONSTRAINT fk_orders_id
    FOREIGN KEY (orders_id)
    REFERENCES orders(order_id)
    ON DELETE CASCADE;

ALTER TABLE orders
    ADD CONSTRAINT fk_anjeo_light
    FOREIGN KEY (anjeos_light_id)
    REFERENCES anjeos_light (anjeo_light_id)
    ON DELETE CASCADE;

ALTER TABLE orders
    ADD CONSTRAINT fk_anjeo_heavy
    FOREIGN KEY (anjeos_heavy_id)
    REFERENCES anjeos_heavy (anjeo_heavy_id)
    ON DELETE CASCADE;

ALTER TABLE orders
    ADD CONSTRAINT fk_user_owner_email
    FOREIGN KEY (user_owner_email)
    REFERENCES users (user_email)
    ON DELETE CASCADE;

ALTER TABLE anjeos_light
    ADD CONSTRAINT fk_order_owner_id
    FOREIGN KEY (order_owner_id)
    REFERENCES orders (order_id)
    ON DELETE CASCADE;

ALTER TABLE anjeos_heavy
    ADD CONSTRAINT fk_order_owner_id
    FOREIGN KEY (order_owner_id)
    REFERENCES orders (order_id)
    ON DELETE CASCADE;

INSERT INTO `instalandoCaliMainDB`.`users` (`name`, `date_creation`, `rol`, `password`, `email`) VALUES ('admin', NOW(), 'administrador', '$2a$11$8I0CpxzUm9IZmyBD9Q.tt.HtPtxE56lx2pPxZrhv6.J.7ZuxBhs..', 'admin@gmail.com');


SELECT *
FROM instalandoCaliMainDB.anjeos_heavy;

SELECT *
FROM instalandoCaliMainDB.anjeos_light;

SELECT *
FROM instalandoCaliMainDB.orders;

SELECT *
FROM instalandoCaliMainDB.users;

SELECT *
FROM instalandoCaliMainDB.orders;
WHERE user_owner_email = "admin@gmail.com";

SELECT *
FROM instalandoCaliMainDB.anjeos_heavy
WHERE order_owner_id = 369;

SELECT *
FROM instalandoCaliMainDB.anjeos_light
WHERE order_owner_id = 369;
