import mongoose, { Schema, model } from 'mongoose';
import IToken from './IToken';

const Token: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

export default mongoose.model<IToken>('Token', Token);
