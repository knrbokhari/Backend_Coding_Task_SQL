import { findTopRatedMovies } from '../services/ratingsServices';
import asyncHandler from '../utils/asyncHandler';

// eslint-disable-next-line import/prefer-default-export
export const getTopRatedMovies = asyncHandler(async (req, res) => {
  const result = await findTopRatedMovies();
  return res.status(200).json({ data: result, success: true });
});
