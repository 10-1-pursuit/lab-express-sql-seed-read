DROP DATABASE IF EXISTS artists_dev;
CREATE DATABASE artists_dev;

\c artists_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (id)
    ON DELETE CASCADE
);