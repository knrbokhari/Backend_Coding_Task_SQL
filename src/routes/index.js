import moviesRoutesConfigure from './moviesRoutes';
import ratingsRoutesConfigure from './ratingsRoutes';

const configureAllRoutes = (app) => {
  moviesRoutesConfigure(app);
  ratingsRoutesConfigure(app);
};

export default configureAllRoutes;
