import cors from "cors";
import express from 'express';
import mongoose from 'mongoose';
import acquaintanceRoutes from './routers/cards/acquaintances';
import vulgarsRoutes from './routers/cards/vulgars';
import confidesRoutes from './routers/cards/confides';

const app = express();
const PORT = process.env.PORT || 8000;

// Подключение к MongoDB
mongoose.connect(process.env.DATABASE_URL as string).then(() => {
console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Разрешает запросы с любых источников. Настройте это в соответствии с вашими требованиями.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные методы
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
}));


// Роуты
app.use('/api', acquaintanceRoutes);
app.use('/api', vulgarsRoutes);
app.use('/api', confidesRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});