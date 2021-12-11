import express, { NextFunction } from 'express';
import userService from '../services/userService';

class UserController {
  async registration(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
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
      console.log(e);
    }
  }

  async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (e: any) {}
  }

  async logout(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (e: any) {}
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
      console.log(e);
    }
  }

  async refresh(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (e: any) {}
  }

  async getUsers(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      res.json('Worked');
    } catch (e: any) {}
  }
}

export default new UserController();
