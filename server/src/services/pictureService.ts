import fs from 'fs';
import Picture from '../models/Picture/Picture';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

class PictureService {
  createFile(file) {
    const filePath: string = `${process.env.FILE_PATH}\\${file.user}\\${file.path}`;
    return new Promise((resolve: any, reject: any) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'File was created' });
        } else {
          reject({ message: 'File already exist' });
        }
      } catch (e: any) {
        return reject({ message: 'File error' });
      }
    });
  }
}

export default new PictureService();
