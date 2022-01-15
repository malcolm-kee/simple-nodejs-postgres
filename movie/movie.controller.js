const express = require('express');
const movieService = require('./movie.service');

const movieController = express.Router();

movieController.get('/', (req, res, next) => {
  movieService
    .getMovies()
    .then((movies) => res.json(movies))
    .catch((err) => next(err));
});

movieController.get('/:id', (req, res, next) => {
  movieService
    .getOneMovie(req.params.id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({
          error: 'Not found',
        });
      }

      return res.json(movie);
    })
    .catch((err) => next(err));
});

module.exports = movieController;
