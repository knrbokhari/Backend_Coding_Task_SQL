import dotenv from 'dotenv';
import app from './app';
import { db } from './db';

dotenv.config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line consistent-return
  db.connect((err) => {
    if (err) return console.error(`error connecting: ${err.stack}`);

    console.log(`connected as id ${db.threadId}`);
  });
  console.log('server running at port', port);
});
