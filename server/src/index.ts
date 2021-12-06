import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app: any = express();
const PORT: number = +process.env.PORT || 6000;
const DB_URL: string = process.env.DB_URL;

const start: any = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server working on ${PORT}`));
  } catch (e: any) {
    console.log(e);
  }
};

start();
