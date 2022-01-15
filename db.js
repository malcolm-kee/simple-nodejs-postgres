const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  seed: () => {
    return pool.query(`
    DROP TABLE IF EXISTS movies;
  
  CREATE TABLE movies (
    id bigserial PRIMARY KEY,
    title text,
    language text
  );
  
  INSERT INTO movies(title, language) 
  VALUES ('Sing 2', 'EN'),
      ('Spider-Man: No Way Home', 'EN'),
      ('Demon Slayer', 'JP'),
      ('Parasite', 'KO'),
      ('The Hows of Us', 'TL'),
      ('Ultraman: A New Power of Singapore', 'JP');`);
  },
};
