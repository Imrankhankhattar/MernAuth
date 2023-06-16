import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import { notFound, errorHandler } from './middleware/error.js'
dotenv.config()
const port = process.env.PORT || 5000
const app = express();
app.use('/api/user', userRoutes)
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})