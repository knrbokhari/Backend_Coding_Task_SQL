import express from 'express';
import { addMovie, longestDurationMovies } from '../controllers/moviesController.js';

const router = express.Router();

// get top 10 movies with the longest runTime
router.get('/v1/longest-duration-movies', longestDurationMovies);

// create new movie
router.post('/v1/new-movie', addMovie);

const moviesRoutesConfigure = (app) => {
  app.use('/api', router);
};

export default moviesRoutesConfigure;
