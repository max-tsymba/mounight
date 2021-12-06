import mongoose, { Schema, model } from 'mongoose';
import IUser from './IUser';

const User: Schema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  bgCover: { type: String },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  mediaFiles: { type: Schema.Types.ObjectId, ref: 'MediaFolder' },
  collection: { type: Schema.Types.ObjectId, ref: 'Collection' },
});

export default mongoose.model<IUser>('User', User);
