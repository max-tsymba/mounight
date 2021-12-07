import { Document } from 'mongoose';

export default interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bg_cover?: string;
  is_activated?: boolean;
  activation_link?: string;
}
