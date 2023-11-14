DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;
\c tuner;

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
  time INT,
  is_favorite BOOLEAN,
  playlist_id INTEGER REFERENCES playlists(id)
);