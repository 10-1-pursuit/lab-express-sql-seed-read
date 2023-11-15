DROP DATABASE IF EXISTS albums_dev;
CREATE DATABASE albums_dev;

\c albums_dev;

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    year_released INTEGER,
    rating VARCHAR(4),
    is_favorite_album BOOLEAN
);

DROP DATABASE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    song_artist TEXT NOT NULL,
    album_name TEXT,
    time TEXT,
    is_favorite_song BOOLEAN,
    album_id INTEGER REFERENCES albums (id)
    ON DELETE CASCADE
);