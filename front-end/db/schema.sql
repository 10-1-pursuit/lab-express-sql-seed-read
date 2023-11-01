DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album,
 time,
 is_favorite BOOLEAN
);
