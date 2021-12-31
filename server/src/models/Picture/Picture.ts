import mongoose, { Schema } from 'mongoose';
import IPicture from './IPicture';

const Picture: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, default: 0 },
  path: { type: String, default: '' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model<IPicture>('Picture', Picture);
