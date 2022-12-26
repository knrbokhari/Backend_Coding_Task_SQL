import express from 'express';
import helmet from 'helmet';
import configureAllRoutes from './routes';
import { handleError } from './middleware/index';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(handleError);
configureAllRoutes(app);

app.get('/', (req, res) => {
  res.send('Server running');
});

export default app;
