\c songs_dev;

INSERT INTO songs (name, artist , album , time , is_favorite)VALUES
('Life is Like a Beach Chair', 'Jay-Z', 'BluePrint', '3:15', true),
('Beat it', 'Michael Jackson', 'Remember the times', '5:43', true),
('Everything is Gonna Be Alright', 'Bob Marley', 'JamRock', '4:15', true),
('Damien', 'DMX', 'Its Dark and Hell is Ho', '3:16', true),
('Rock the Boat', 'Aaliyah', 'unknown', '4:00', true);


-- db/seed.sql
INSERT INTO reviews (songs_id, reviewer, title, content, rating )
VALUES
('1', 'Evan', 'My Favorite', 'This track crushes it when it comes to how I am feeling sometimes', 3),
('2', 'Evan', 'My Favorite', 'This song is amazing, it is so inspiring to me', 3),
('3', 'Evan', 'My Least Favorite', 'The instrumental calms my soul', 5),
('2', 'Juliana', 'I Love This Song', 'I finally learned all of the lyrics', 5),
('2', 'David', 'Cool Song', 'But I got way into playing the song so much', 1),
('2', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations ', 3),
('2', 'Alison', 'A lifesaver!','Helped me get through some tough times', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV listening to this song!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is this song is awesome', 5);