DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;
\c tuner;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  artist TEXT NOT NULL,
  album TEXT NOT NULL,
  time TEXT,
  is_favorite BOOLEAN
);