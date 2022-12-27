import { createNewMovie, getLongestDurationMovies } from '../services/movieServices.js';
import asyncHandler from '../utils/asyncHandler.js';

export const longestDurationMovies = asyncHandler(async (req, res) => {
  const result = await getLongestDurationMovies();
  return res.status(200).json({ data: result, success: true });
});

export const addMovie = asyncHandler(async (req, res) => {
  await createNewMovie(req.body);
  return res.status(201).json({ msg: 'Movie create successfully', success: true });
});
