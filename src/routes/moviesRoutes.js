import express from 'express';

const router = express.Router();

// get top 10 movies with the longest runTime
router.get('/longest-duration-movies', 'longestDurationMovies');

// create new movie
router.post('/new-movie', 'newMovie');

const configure = (app) => {
  app.use('/api/v1', router);
};

export default configure;
