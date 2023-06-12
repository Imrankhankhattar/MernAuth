import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
dotenv.config()
const port = process.env.PORT || 5000
const app = express();
app.use('/api/user', userRoutes)
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})