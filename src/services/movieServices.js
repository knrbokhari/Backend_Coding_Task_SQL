import db from '../connectDB.js';

// eslint-disable-next-line import/prefer-default-export
export const getLongestDurationMovies = async () => {
  const q = `SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies
  ORDER BY runtimeMinutes DESC
  LIMIT 10;`;
  const results = await db.query(q);
  return results;
};

export const createNewMovie = async (data) => {
  const q = 'INSERT INTO movies(tconst, primaryTitle, runtimeMinutes, genres) VALUES (?)';

  const values = [
    data.tconst,
    data.primaryTitle,
    data.runtimeMinutes,
    data.genres,
  ];

  const results = await db.query(q, [values]);
  return results;
};
