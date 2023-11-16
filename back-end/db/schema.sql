DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR (255),
    time VARCHAR (255),
    is_favorite BOOLEAN
);