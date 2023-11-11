DROP DATABASE IF EXISTS artists_dev;
CREATE DATABASE artists_dev;

\c artists_dev;

CREATE TABLE artists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
     hometown TEXT);


DROP TABLE IF EXISTS tuners;

CREATE TABLE tuners(
    id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     artist TEXT NOT NULL,
      album TEXT,
       year_release TEXT,
       is_favorite BOOLEAN, 
       artist_id INTEGER REFERENCES artist (id)
       ON DELETE CASCADE);