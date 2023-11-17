DROP DATABASE IF EXISTS music_database;
CREATE DATABASE music_database;


\c music_database;

DROP TABLE IF EXISTS playlists;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);


CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN,
    playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE
);



