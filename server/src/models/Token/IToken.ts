import { Document } from 'mongoose';

export default interface IToken extends Document {
  user: any;
  refreshToken: string;
}
