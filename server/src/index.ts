import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.router';
import pictureRouter from './routes/picture.router';
import errorMiddleware from './middlewares/error.middleware';
import path from 'path';
import cors from 'cors';
import fileUpload from 'express-fileupload';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app: any = express();
const PORT: number = +process.env.PORT || 6000;
const DB_URL: string = process.env.DB_URL;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'files')));
app.use(fileUpload({}));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use('/api/auth', authRouter);
app.use('/api/media', pictureRouter);
app.use(errorMiddleware);

const start: any = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server working on ${PORT}`));
  } catch (e: any) {
    console.log(e);
  }
};

start();
