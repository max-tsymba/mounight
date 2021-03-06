import express from 'express';
import userService from '../services/userService';
import { Result, ValidationError, validationResult } from 'express-validator';
import ApiError from '../exceptions/api.error';

class UserController {
  async registration(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const errors: Result<ValidationError> = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error!', errors.array()));
      }
      const {
        username,
        email,
        password,
      }: { username: string; email: string; password: string } = req.body;

      const userData: any = await userService.registration(
        username,
        email,
        password,
      );

      const maxAge: number = 30 * 24 * 60 * 60 * 1000;

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e: any) {
      next(e);
    }
  }

  async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { email, password }: { email: string; password: string } = req.body;
      const userData = await userService.login(email, password);
      const maxAge: number = 30 * 24 * 60 * 60 * 1000;
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e: any) {
      next(e);
    }
  }

  async logout(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { refreshToken }: { refreshToken: string } = req.cookies;
      const token: any = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e: any) {
      next(e);
    }
  }

  async update(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const user = await userService.update(req.body);
      return res.json(user);
    } catch (e: any) {
      next(e);
    }
  }

  async activate(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const activationLink: string = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e: any) {
      next(e);
    }
  }

  async refresh(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { refreshToken }: { refreshToken: string } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      const maxAge: number = 30 * 24 * 60 * 60 * 1000;
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e: any) {
      next(e);
    }
  }

  async getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const user = await userService.getUser(req.params.id);
      return res.json(user);
    } catch (e: any) {
      next(e);
    }
  }

  async getUsers(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const users = await userService.getAllUser();
      return res.json(users);
    } catch (e: any) {
      next(e);
    }
  }

  async delete(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const user = await userService.delete(req.body._id);
      return res.json('Account has been deleted' + user);
    } catch (e: any) {
      next(e);
    }
  }
}

export default new UserController();
