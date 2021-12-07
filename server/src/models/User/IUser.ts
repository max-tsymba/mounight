import { Document } from 'mongoose';

export default interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  avatar?: string;
  bgCover?: string;
  isActivated?: boolean;
  activationLink?: string;
  mediaFiles: any;
  collection: any;
}
