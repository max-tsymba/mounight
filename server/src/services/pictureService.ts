import path from 'path';
import IMediaDto from '../dtos/picture/picture';
import IPicture from '../models/Picture/IPicture';
import Picture from '../models/Picture/Picture';
import fs from 'fs';

class PictureService {
  async create(dto: IMediaDto): Promise<IPicture> {
    const media: IPicture = new Picture({
      ...dto,
      size: 0,
    });
    await media.save();
    return media;
  }

  async getAll(): Promise<IPicture[]> {
    const medias: any = await Picture.find();
    return medias;
  }

  async getOne(id: string): Promise<IPicture> {
    const media: any = await Picture.findById(id).exec();
    return media;
  }

  async getAllByUser(user_id: string): Promise<IPicture[]> {
    const media: any = await Picture.find({ user: user_id });
    return media;
  }

  async delete(id: string): Promise<string> {
    const media: any = await Picture.findByIdAndDelete(id).exec();
    return media._id;
  }

  async downloadFile(id: string) {
    const file: any = await Picture.findById(id);
    const dir = path.resolve(
      __dirname,
      '..',
      'files',
      String(file.user),
      file.name,
    );

    if (fs.existsSync(dir))
      return {
        dir,
        fileName: file.name,
      };
  }
}

export default new PictureService();
