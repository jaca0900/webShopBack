drop schema if exists webshop;
create schema webshop;

use webshop;

create table users(
    id SERIAL,
    first_name VARCHAR(128),
    last_name VARCHAR(128),
    addres VARCHAR(128),
    login VARCHAR(128),
    email VARCHAR(128),
    pass VARCHAR(128),
    bank VARCHAR(128),
    payment_methods VARCHAR(128)
)engine=InnoDB;

create table items(
    id SERIAL,
    name VARCHAR(20),
    description VARCHAR(512),
    quantity INTEGER,
    item_price FLOAT,
    amount_left INTEGER,
    startDate DATE,
    endDate DATE,
    createDate DATE,
    user_id BIGINT UNSIGNED,
    FOREIGN KEY userKey (user_id)
    REFERENCES users(id)
)engine=InnoDB;

create table files(
    id SERIAL primary key,
    item_id BIGINT UNSIGNED,
    fileUrl varchar(512),
    content blob,
    FOREIGN KEY itemKey (item_id)
    REFERENCES items(id)
)engine=InnoDB;

create table messages(
    id SERIAL,
    title VARCHAR(128),
    content VARCHAR(512),
    sendDate DATE,
    sender_id BIGINT UNSIGNED,
    receiver_id BIGINT UNSIGNED,
    FOREIGN KEY senderKey (sender_id)
        REFERENCES users(id),
    FOREIGN KEY receiverKey (receiver_id)
        REFERENCES users(id)
)engine=InnoDB;