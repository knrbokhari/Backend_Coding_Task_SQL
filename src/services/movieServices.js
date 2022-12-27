import db from '../connectDB.js';
const promisePool = db.promise();
import { QueryTypes } from 'sequelize';

// eslint-disable-next-line import/prefer-default-

export const getLongestDurationMovies = async () => {
  const q = `SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies
  ORDER BY runtimeMinutes DESC
  LIMIT 10;`;
  const results = await promisePool.query(`SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies
    ORDER BY runtimeMinutes DESC
    LIMIT 10;`);

  return results[0];
};

export const createNewMovie = async (data) => {
  const q = 'INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES (?)';

  const values = [
    data.tconst,
    data.titleType,
    data.primaryTitle,
    data.runtimeMinutes,
    data.genres,
  ];

  const results = await promisePool.query(q, [values])
  return results;
};
