DROP DATABASE IF EXISTS music_database;
CREATE DATABASE music_database;


\c music_database;


CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN
);

