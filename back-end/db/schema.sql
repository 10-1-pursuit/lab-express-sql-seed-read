DROP DATABASE IF EXISTS tunes_app;
CREATE DATABASE tunes_app;

\c tunes_app;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT NOT NULL,
 time TEXT NOT NULL,
 is_favorite BOOLEAN,
 image_url text
);



-- DO SOMETHING | at column | FROM  |  table name | Specifications
-- SELECT       | album     | FROM  |     songs   | WHERE name ILIKE 'love'
