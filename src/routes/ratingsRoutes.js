import express from 'express';
import { getTopRatedMovies } from '../controllers/ratingsController';

const router = express.Router();

// get top rated movies order by averageRating
router.get('/top-rated-movies', getTopRatedMovies);

const configure = (app) => {
  app.use('/api/v1', router);
};

export default configure;
