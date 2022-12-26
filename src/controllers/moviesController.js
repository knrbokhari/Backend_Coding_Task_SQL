import { createNewMovie, getLongestDurationMovies } from '../services/movieServices';
import asyncHandler from '../utils/asyncHandler';

export const longestDurationMovies = asyncHandler(async (req, res) => {
  const result = await getLongestDurationMovies();
  return res.status(200).json({ data: result, success: true });
});

export const addMovie = asyncHandler(async (req, res) => {
  const result = await createNewMovie(req.body);
  return res.status(201).json({ data: result, msg: 'Movie create successfully', success: true });
});
