import express, { NextFunction } from 'express';

class UserController {
  async registration(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (e: any) {}
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
    } catch (e: any) {}
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
