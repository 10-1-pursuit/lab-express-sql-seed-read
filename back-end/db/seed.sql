\c tuner;

INSERT INTO playlists (name, description) VALUES
('Sad Playlist', 'Songs to keep your sadness going!'),
('Anarchy Playlist', 'Songs to overthrow the government with!'),
('Chill Playlist', 'Songs for your lazy afternoons');

INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES
('American Idiot', 'Green Day', 'American Idiot', 174, false, 2),
('Basket Case', 'Green Day', 'Dookie', 183, true, 2),
('Numb', 'Linkin Park', 'Meteora', 188, true, 1),
('In the End', 'Linkin Park', 'Hybrid Theory', 216, true, 1),
('Somewhere Over the Rainbow', 'Israel Kamakawiwo''ole', 'Ka ''Ano''i', 307, true, 3),
('Kick Push', 'Lupe Fiasco', 'Food & Liquor', 254, true, 3);