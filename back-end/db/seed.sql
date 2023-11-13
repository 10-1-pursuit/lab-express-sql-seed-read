\c songs_dev;

INSERT INTO albums (album_name, released_year, is_grammy) VALUES
('Nevermind', 'March 12, 2021', true),
('Blood on the tracks', 'August 11, 2017', false),
('Songs for the deaf', 'June 3, 2014', true);

INSERT INTO songs (albums_id, name, artist, album, time, is_favorite) VALUES 
('1', 'Paradox', 'Lipless', 'Sundance', '4:00', true),
('2', 'Silence', 'Marshmello', 'Khalid', '5:09', false),
('2', 'Liberate', 'Eric Prydz', 'Opus', '3:45', false),
('3', 'abc', 'xyz', 'qwerty', '2:45', true),
('2', 'xyz', 'abc', 'asdf', '2:21', false),
('2', 'qwerty', 'abc', 'xyz', '3:46', true),
('3', 'zxc', 'asdf', 'qwerty', '4:23', true);












