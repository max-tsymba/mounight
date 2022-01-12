import express from 'express';
import fs from 'fs';
import path from 'path';
import pictureService from '../services/pictureService';

class PictureController {
  async create(req: any, res: express.Response, next: express.NextFunction) {
    try {
      const file: any = req.files.file;
      const user: any = req.params.id;
      const { name }: { name: string } = file;
      const dir = path.resolve(__dirname, '..', 'files', user);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const file_path = `${dir}/${file.name}`;
      file.mv(file_path);

      const path_for_client = `${user}/${file.name}`;

      const type = file.name.split('.').pop();

      const newMedia: any = await pictureService.create({
        name,
        type,
        user,
        path: path_for_client,
      });
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

  async getAllByUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const media = await pictureService.getAllByUser(req.params.id);
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

  async downloadFile(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const file = await pictureService.downloadFile(req.params.id);
      return res.download(file.dir, file.fileName);
    } catch (e: any) {
      next(e);
    }
  }
}

export default new PictureController();
