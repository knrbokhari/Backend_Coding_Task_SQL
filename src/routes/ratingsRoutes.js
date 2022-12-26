import express from 'express';

const router = express.Router();

// get top rated movies order by averageRating
router.get('/top-rated-movies', '/top-rated-movies');

const configure = (app) => {
  app.use('/api/v1', router);
};

export default configure;
