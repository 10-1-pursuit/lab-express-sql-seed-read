\c music_database;

INSERT INTO playlists (name, description) VALUES 
('Favorites', 'A playlist of my favorite songs'),
('Workout', 'Energetic songs to keep you motivated in the gym'),
('Calm Vibes', 'Relaxing tunes for any occasion'),
('Late Night', 'Melodies for winding down before bed');

INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES 
('For Nobody', 'Jody', 'Waves', '3:03', true, 1),
('Blue', 'Ruger', 'RU The World', '3:18', true, 2),
('Tested, Approved, & Trusted', 'Burna Boy', 'I Told Them...', '3:40', true, 1),
('Love Yourz', 'J. Cole', '2014 Forest Hills Drive', 3:32, false),
('Lights Off', 'RajahWild', 'Lights Off Single', '2:45', false, 4),
('When It Comes To You', 'Fridayy', 'When It Comes To You Single', '2:48', true, 3),
('Pidgin & English', 'Bnxn', 'Sincerely, Benson', '3:39', true, 2),
('African Giant', 'Burna Boy', 'African Giant', '4:12', true, 1),
('Indigo', 'Chris Brown', 'Indigo', '3:50', false, 4),
('Fall', 'Davido', 'A Good Time', '3:45', true, 3),
('Dumebi', 'Rema', 'Rema', '2:53', true, 2),
('Sincerely Yours', 'Bnxn', 'Sincerely, Benson', '3:30', false, 1);
('I Sip', 'Tory Lanez', 'Single', '3:16', false, 3),



