import express from 'express';
import { getTopRatedMovies } from '../controllers/ratingsController.js';

const router = express.Router();

// get top rated movies order by averageRating
router.get('/v1/top-rated-movies', getTopRatedMovies);

const ratingsRoutesConfigure = (app) => {
  app.use('/api', router);
};

export default ratingsRoutesConfigure;
