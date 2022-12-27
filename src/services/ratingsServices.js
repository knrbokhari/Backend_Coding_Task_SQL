import db from '../connectDB.js';
const promisePool = db.promise();

// eslint-disable-next-line import/prefer-default-export
export const findTopRatedMovies = async () => {
  const q = `SELECT movies.tconst, movies.primaryTitle, movies.genres, ratings.tconst, ratings.averageRating 
  FROM movies INNER JOIN ratings ON movies.tconst = ratings.tconst 
  WHERE averageRating > 6.0
  ORDER BY averageRating`;
  const results = await promisePool.query(q);
  return results[0];
};
