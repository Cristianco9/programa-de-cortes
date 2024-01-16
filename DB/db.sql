CREATE DATABASE instalandoCaliMainDB;

USE instalandoCaliMainDB;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(10) NOT NULL,
    user_password VARCHAR(70) NOT NULL,
    orders_id INT(10)
);

CREATE TABLE anjeos_light (
    order_owner_id INT(10),
    anjeo_light_id INT(10) NOT NULL PRIMARY KEY,
    anjeo_color TEXT(10) NOT NULL,
    profile_type TEXT(10) NOT NULL,
    opening VARCHAR(15) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT(15) NOT NULL,
    height FLOAT NOT NULL,
    guide INT(10) NOT NULL,
    installation VARCHAR(10) NOT NULL,
    divisorHigh INT(10) NOT NULL,
    angle VARCHAR(10) NOT NULL,
    notes TEXT(200)
);

CREATE TABLE anjeos_heavy (
    order_owner_id INT(10),
    anjeo_heavy_id INT(10) NOT NULL PRIMARY KEY,
    anjeo_color TEXT(10) NOT NULL,
    profile_type TEXT(10) NOT NULL,
    opening VARCHAR(15) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT(15) NOT NULL,
    height FLOAT NOT NULL,
    head INT(10) NOT NULL,
    adaptador INT(10) NOT NULL,
    top_profile INT(10) NOT NULL,
    installation VARCHAR(10) NOT NULL,
    divisorHigh INT(10) NOT NULL,
    type_handle TEXT(15) NOT NULL,
    open_direction TEXT(15) NOT NULL,
    notes TEXT(200)
);

CREATE TABLE orders (
    user_owner_id INT(10),
    order_id INT(10) NOT NULL PRIMARY KEY,
    order_date DATE,
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
    ADD CONSTRAINT fk_user_owner_id
    FOREIGN KEY (user_owner_id)
    REFERENCES users (user_id)
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

INSERT INTO `instalandoCaliMainDB`.`users` (`user_name`, `user_password`) VALUES ('admin', 'pass1234');


SELECT *
FROM instalandoCaliMainDB.anjeos_heavy;

SELECT *
FROM instalandoCaliMainDB.anjeos_light;

SELECT *
FROM instalandoCaliMainDB.orders;

SELECT *
FROM instalandoCaliMainDB.users;