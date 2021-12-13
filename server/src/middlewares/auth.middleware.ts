import express from 'express';
import ApiError from '../exceptions/api.error';
import { IRequestUser } from '../overrides/Request';
import tokenService from '../services/tokenService';

export default function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  try {
    const authorizationHeader: string = req.headers.authorization;
    if (!authorizationHeader) return next(ApiError.UnauthorizedError());

    const accessToken: string = authorizationHeader.split(' ')[1];
    if (!accessToken) return next(ApiError.UnauthorizedError());

    const userData: any = tokenService.validateAccessToken(accessToken);
    if (!userData) return next(ApiError.UnauthorizedError());

    const userRequest = req as IRequestUser;
    userRequest.user = userData;
    next();
  } catch (e: any) {
    return next(ApiError.UnauthorizedError());
  }
}
