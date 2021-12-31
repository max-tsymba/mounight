import { Document } from 'mongoose';

export default interface IPicture extends Document {
  name: string;
  type: string;
  size: number;
  path?: string;
  user: any;
}
