import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errormiddleware.js';
import connectDB from './config/db.js';
const port = process.env.port || 5000;
import userRoutes from './routes/userRoutes.js'


connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//basic url for using userRoutes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('server is ready'))

//calling the error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server stared on port ${port}`))