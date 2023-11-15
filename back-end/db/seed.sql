\c artists_dev;

INSERT INTO artists (name) VALUES
('J. Cole'),
('M.I.A.'),
('Nelly');

INSERT INTO songs (artist_id, name, artist, album, time, is_favorite) VALUES
('1', 'Rise and Shine', 'J. Cole', 'Cole World: The Sideline Story', '4:34', true),
('1', 'January 28th', 'J. Cole', '2014 Forest Hills Drive', '4:02', true),
('2', 'Paper Planes', 'M.I.A.', 'Kala', '3:25', false),
('3', 'Hot In Herre', 'Nelly', 'Nellyville', '3:48', false),
('1', 'the.climb.back', 'J. Cole', 'The Off-Season', '5:06', true);