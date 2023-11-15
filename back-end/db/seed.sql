\c artists_dev;

INSERT INTO artists (name, category, hometown) VALUES 
('Shawny Binladen', 'Hip-Hop','Queens, NY'),
('Styles P','Hip-Hop', 'Yonkers, NY'),
('Don Toliver','R&B', 'Houston, TX'),
('30Mg Letto','Hip-Hop','Brooklyn, NY'),
('2Pac', 'Hip-Hop','Harlem, NY');

INSERT INTO tuners (artist_id,name,artist,album,year_release,is_favorite) VALUES
('1','Grinchset City','Shawny Binladen','Grinchn', '2023',true),
('2','Mcs','Styles P The Ghost','Panero','2016',true),
('3','Leather Coat','Don Toliver','DT','2023',true),
('4','Bounce Back','30Mg Letto','Get Back','2022',true),
('5','All About U','2Pac','MOB','1996', true),
('5','Ambitionz Az A Ridah','2Pac','All Eyez On Me','1996',false);