-- db/seed.sql
\c tuner;

INSERT INTO songs ( name,
 artist,
 album,
 time,
 is_favorite) 
 VALUES
('There I Go', 'Gucci Mane, J. Cole, Mike WiLL Made-It', '1', '2:52', true),
('Endless Fashion', 'Lil Uzi Vert, Nicki Minaj', '2', '3:36', true),
('Hellcat Kenny', 'Young Thug, Lil Uzi Vert', '3', '2:34', false),
('City Boys', 'Burna Boy', '4', '2:33', true),
('GEEKALEEK', 'OhGeesy, BIA', '5', '2:08', false);
