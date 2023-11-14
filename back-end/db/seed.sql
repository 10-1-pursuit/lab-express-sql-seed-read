\c songs_dev

INSERT INTO artists (artist_name, genre, is_lead_singer) VALUES
('Jack Smith', 'electronic', true),
('Mary John', 'pop', false),
('Alex Hope', 'hip hop', true);

INSERT INTO songs (artist_id, name, album, time, is_favorite) VALUES
('1', 'Almost Home', 'Sultan + Shepard', '3:00', true),
('3', 'lie', 'Shallou', '4:00', false),
('2', 'Chiro', 'Yoste', '5:00', true),
('3', 'Dynasty', 'Kaskade', '6:00', false),
('1', 'Find You', 'Zedd', '7:00', true),
('2', 'Cornelius', 'Point by cornelius','8:00', false);

