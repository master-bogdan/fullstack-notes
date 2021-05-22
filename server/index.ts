import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import noteRouter from './routes/note';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use(noteRouter); // /note

const start = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('mongoose connected');
      }
    });

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();