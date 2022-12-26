import moviesRoutesConfigure from './moviesRoutes.js';
import ratingsRoutesConfigure from './ratingsRoutes.js';

const configure = (app) => {
  moviesRoutesConfigure(app);
  ratingsRoutesConfigure(app);
};

export default configure;
