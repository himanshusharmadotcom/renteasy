import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import path from 'path';

dotenv.config();

const app = express();


connectDB();

const __dirname = path.resolve();

app.use(express.json({ extended: false })); 
app.use(cors());
app.use(cookieParser())

app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
