import { GeneralError } from '../utils/generalError';

// eslint-disable-next-line no-unused-vars
export default async (err, req, res, next) => {
  if (err instanceof GeneralError) {
    const code = err.getCode();
    return res.status(code).json({ name: err.name, msg: err.message });
  }
  return res.status(500).json({
    name: 'internal server error', msg: err.message,
  });
};
