\c songs_dev;


-- Insert sample songs into the "songs" table

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES
('Blinding Ligit', 'TheWeeknd','After Hours', '3:23', true),
('To Be Loved', 'Adele','30', '6:43', false),
('Save Your Tears', 'TheWeeknd','After Hours', '3:35', true);

INSERT INTO reviews (songs_id, reviewer, title,content,rating)
VALUES
('1', 'Amy', 'My Favorite', 'Best song for twenty twenty', 3),
('2', 'Louis', 'My Favorite', 'This is awesome', 3),
('3', 'John', 'My Least Favorite', 'Im stressed out', 5),
('2', 'Juliana', 'It is the best', 'I love Adele', 5),
('2', 'Sabrina', 'Cool Site', 'It keeps me activate in the shower', 1),
('2', 'Mr. Henneberry', 'Ehh', 'This song displease me', 3),
('2', 'Vincent', 'A lifesaver!','Helped me get my stove cleaner than I ever imagiend possible!', 4),
('3', 'Giuliana', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('3', 'Gabby', 'My Friend Giuliana', 'Gets a discount if I leave a positive review, so here it is',5);