import express, { NextFunction } from 'express';

class PictureController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (e: any) {
      next(e);
    }
  }

  async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      return res.json('worked');
    } catch (e: any) {
      next(e);
    }
  }

  async getOne(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
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
    } catch (e: any) {
      next(e);
    }
  }
}

export default new PictureController();
