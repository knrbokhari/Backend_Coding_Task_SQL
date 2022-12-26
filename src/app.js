/* eslint-disable import/extensions */
import express from 'express';
import helmet from 'helmet';
import configureAllRoutes from './routes/index.js';
import handleError from './middleware/handleError.js';

const app = express();

app.use(helmet());
app.use(express.json());
configureAllRoutes(app);

app.get('/', (req, res) => {
  res.send('Server running');
});

app.use(handleError);

export default app;
