import cors from "cors";
import express from 'express';
import mongoose from 'mongoose';
import acquaintanceRoutes from './routers/cards/acquaintances';
import vulgarsRoutes from './routers/cards/vulgars';
import confidesRoutes from './routers/cards/confides';

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cards').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

// Middleware
app.use(express.json());
app.use(cors());

// Роуты
app.use('/api', acquaintanceRoutes);
app.use('/api', vulgarsRoutes);
app.use('/api', confidesRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});