import IMediaDto from '../dtos/picture/picture';
import IPicture from '../models/Picture/IPicture';
import Picture from '../models/Picture/Picture';

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

  async getOne(id: string) {
    const media: any = await Picture.findById(id).exec();
    return media;
  }

  async delete(id: string) {
    const media: any = await Picture.findByIdAndDelete(id).exec();
    return media._id;
  }
}

export default new PictureService();
