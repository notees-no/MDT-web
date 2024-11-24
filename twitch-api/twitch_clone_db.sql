-- Удаление базы данных, если она существует
DROP DATABASE IF EXISTS twitch_clone_db;

-- Создание базы данных
CREATE DATABASE twitch_clone_db DEFAULT CHARACTER SET utf8;

-- Использование базы данных
USE twitch_clone_db;

-- Удаление таблиц, если они существуют
DROP TABLE IF EXISTS subscriptions;

DROP TABLE IF EXISTS users;

-- Создание таблицы users
CREATE TABLE IF NOT EXISTS users (
    id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('GUEST', 'USER', 'ADMIN') NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY username_UNIQUE (username)
);

-- Создание таблицы subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    followers INT NOT NULL,
    PRIMARY KEY (id)
);

-- Вставка тестовых данных в таблицу users
INSERT INTO
    users (username, password, role)
VALUES
    (
        'admin',
        '$2a$10$NDUZ6ePTr9xl1Y9Ruy0ezuYl5mK9bQx4bmUdGnV4hxZygZ1c8vJj2',
        'ADMIN'
    ),
    (
        'user',
        '$2a$10$yCldbrIaAhrbWZfo5b5UUus2ri56KAiTc6vmX8BcdKAO7V.Y5yl2m',
        'USER'
    ),
    (
        '1',
        '$2a$10$SPXrp58h18hsByCuq9W8kOWUPdX.OSuRziXfZB.QvOMCwhJ1iqVtC',
        'ADMIN'
    );

-- Вставка тестовых данных в таблицу subscriptions
INSERT INTO
    subscriptions (name, category, followers)
VALUES
    ('Ninja', 'Gaming', 18000000),
    ('Pokimane', 'Just Chatting', 9000000),
    ('Shroud', 'FPS', 10000000),
    ('IRL_Explorer', 'IRL', 500000),
    ('CookingMaster', 'Food & Drink', 2000000);