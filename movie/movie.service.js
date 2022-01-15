const db = require('../db');

exports.getMovies = () =>
  db.query(`SELECT * FROM movies;`).then((res) => res.rows);

exports.getOneMovie = (id) =>
  db
    .query(`SELECT * FROM movies WHERE id = $1`, [id])
    .then((res) => res.rows[0]);
