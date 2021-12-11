import express from 'express';
import ApiError from '../exceptions/api.error';

export default function (
  error: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  console.log(error);
  if (error instanceof ApiError) {
    return res
      .status(error.status)
      .json({ message: error.message, error: error.errors });
  }
  return res.status(500).json({ message: 'Server error' });
}
