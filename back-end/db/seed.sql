 \c albums_dev;

INSERT INTO albums(name, artist, year_released, rating, is_favorite_album) VALUES
('Shea Butter Baby', 'Ari Lennox', 2018, 'E', true),
('Back of My Mind', 'H.E.R', 2020, 'PG13', true),
('Party - Single', 'Beyonece ft. J Cole', 2011, 'E', true),
('Loud', 'Rihanna', 2010, 'E', true),
('After Hours', 'The Weeknd', 2020, 'E', true),
('Doo Wops & Hooligans', 'Bruno Mars', 2010, 'PG13', true);

INSERT INTO songs (album_id, title, song_artist, album_name, time, is_favorite_song) VALUES
('1','Shea Butter Baby', 'Ari Lennox', 'Shea Butter Baby', '3:32', true),
('2', 'Damage', 'H.E.R.', 'Back of My Mind', '3:47', true),
('3', 'Party', 'Beyonce ft. J Cole', 'Party - Single', '3:40', true),
('4', 'Man Down', 'Rihanna', 'Loud', '4:27', true),
('4', 'Skin', 'Rihanna', 'Loud', '5:02', false),
('5', 'After Hours', 'The Weeknd', 'After Hours', '6:01', true),
('5', 'Snowchild', 'The Weeknd', 'After Hours', '4:07', true),
('5', 'Escape From LA', 'The Weeknd', 'After Hours', '5:56', true),
('6', 'Grenade', 'Bruno Mars', 'Doo Wops & Hooligans', '3:42', true),
('6', 'Talking to the Moon', 'Bruno Mars', 'Doo Wops & Hooligans', '3:36', false);