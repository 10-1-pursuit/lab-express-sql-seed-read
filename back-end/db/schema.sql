DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album_name TEXT NOT NULL,
    released_year TEXT,
    is_grammy BOOLEAN NOT NULL
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    albums_id INTEGER REFERENCES albums (id)
    ON DELETE CASCADE
);
