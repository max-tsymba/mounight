import mongoose, { Schema } from 'mongoose';
import IUser from './IUser';

const User: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: '' },
    bg_cover: { type: String, default: '' },
    is_activated: { type: Boolean, default: false },
    activation_link: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>('User', User);
