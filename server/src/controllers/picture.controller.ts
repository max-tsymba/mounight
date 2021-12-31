import express from 'express';
import pictureService from '../services/pictureService';

class PictureController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { name, type, user }: { name: string; type: string; user: any } =
        req.body;

      const newMedia: any = await pictureService.create({ name, type, user });
      return res.json(newMedia);
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
      const medias = await pictureService.getAll();
      return res.json(medias);
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
      const media = await pictureService.getOne(req.params.id);
      return res.json(media);
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
      const media = await pictureService.delete(req.params.id);
      return res.json(media);
    } catch (e: any) {
      next(e);
    }
  }
}

export default new PictureController();
