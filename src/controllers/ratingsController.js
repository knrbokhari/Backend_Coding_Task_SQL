import { findTopRatedMovies } from '../services/ratingsServices.js';
import asyncHandler from '../utils/asyncHandler.js';

// eslint-disable-next-line import/prefer-default-export
export const getTopRatedMovies = asyncHandler(async (req, res) => {
  const result = await findTopRatedMovies();
  return res.status(200).json({ data: result, success: true });
});
