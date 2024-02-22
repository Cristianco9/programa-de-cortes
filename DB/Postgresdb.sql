CREATE DATABASE instalando_cali_db;

\c instalando_cali_db

CREATE TABLE users (
    date_creation TIMESTAMP NOT NULL,
    id SERIAL PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    rol VARCHAR(15) NOT NULL,
    name VARCHAR(15) NOT NULL,
    password VARCHAR(70) NOT NULL,
    orders_id INT
);

CREATE TABLE anjeos_light (
    order_owner_id INT NOT NULL,
    anjeo_light_id SERIAL PRIMARY KEY,
    date_creation TIMESTAMP NOT NULL,
    color VARCHAR(8) NOT NULL,
    profile_type VARCHAR(8) NOT NULL,
    opening VARCHAR(16) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT NOT NULL,
    height FLOAT NOT NULL,
    guide FLOAT NOT NULL,
    installation VARCHAR(7) NOT NULL,
    divisorHigh FLOAT NOT NULL,
    angle VARCHAR(10) NOT NULL,
    notes VARCHAR(200)
);

CREATE TABLE anjeos_heavy (
    order_owner_id INT NOT NULL,
    anjeo_heavy_id SERIAL PRIMARY KEY,
    date_creation TIMESTAMP NOT NULL,
    color VARCHAR(8) NOT NULL,
    profile_type VARCHAR(12) NOT NULL,
    opening VARCHAR(16) NOT NULL,
    place VARCHAR(15) NOT NULL,
    width FLOAT NOT NULL,
    height FLOAT NOT NULL,
    head FLOAT NOT NULL,
    adaptador FLOAT NOT NULL,
    top_profile FLOAT NOT NULL,
    installation VARCHAR(10) NOT NULL,
    divisorHigh FLOAT NOT NULL,
    type_handle VARCHAR(12) NOT NULL,
    open_direction VARCHAR(9) NOT NULL,
    notes VARCHAR(200)
);

CREATE TABLE orders (
    user_owner_id INT(10) NOT NULL,
    id SERIAL PRIMARY KEY,
    date_creation TIMESTAMP NOT NULL,
    status VARCHAR(10) NOT NULL,
    anjeos_light_id INT,
    anjeos_heavy_id INT
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
    REFERENCES users (id)
    ON DELETE CASCADE;

ALTER TABLE anjeos_light
    ADD CONSTRAINT fk_order_owner_id_light
    FOREIGN KEY (order_owner_id)
    REFERENCES orders (order_id)
    ON DELETE CASCADE;

ALTER TABLE anjeos_heavy
    ADD CONSTRAINT fk_order_owner_id_heavy
    FOREIGN KEY (order_owner_id)
    REFERENCES orders (order_id)
    ON DELETE CASCADE;

INSERT INTO users (name, date_creation, rol, password, email)
VALUES ('admin', CURRENT_TIMESTAMP, 'administrador',
        '$2a$11$8I0CpxzUm9IZmyBD9Q.tt.HtPtxE56lx2pPxZrhv6.J.7ZuxBhs..',
        'admin@gmail.com');
