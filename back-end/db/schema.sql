DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

--connects the database
\c songs_dev;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  artist_name TEXT NOT NULL,
  genre TEXT NOT NULL,
  is_lead_singer BOOLEAN NOT NULL
);


CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOLEAN,
  artist_id INTEGER REFERENCES artists (id)
  ON DELETE CASCADE
);



