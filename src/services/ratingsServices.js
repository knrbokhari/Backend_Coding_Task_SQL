import db from '../connectDB';

// eslint-disable-next-line import/prefer-default-export
export const findTopRatedMovies = async () => {
  const q = `SELECT tconst, primaryTitle, runtimeMinutes, genres FROM movies
  ORDER BY runtimeMinutes DESC
  LIMIT 10;`;
  const results = await db.query(q);
  return results;
};
