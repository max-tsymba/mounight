import mongoose, { Schema, model } from 'mongoose';
import IUser from './IUser';

const User: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  bg_cover: { type: String },
  is_activated: { type: Boolean, default: false },
  activation_link: { type: String },
});

export default mongoose.model<IUser>('User', User);
