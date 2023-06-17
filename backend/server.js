import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import { notFound, errorHandler } from './middleware/error.js';
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
