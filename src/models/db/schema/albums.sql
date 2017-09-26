INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead');

INSERT INTO
  users (name, email, password)
VALUES
  ('Zeze', 'onezeze@zeze.com', '123zeze'),
  ('Clowns', 'creepyaf@hotmail.com', 'password123'),
  ('anon', '_@anon.party', '***');

INSERT INTO
  reviews (user_id, album_id, review_text)
VALUES
  (1, 1, 'Never heard of em... blah blah blah too lazy too look up on spotify'),
  (2, 2, 'Hmm I know a Solange... that just about sums it up'),
  (3, 3, 'SouthPark?!! Remember that episode when Stans dad...?'),
  (1, 4, 'finally, a band i recognize! ...but I am blanking on their songs right now!');
