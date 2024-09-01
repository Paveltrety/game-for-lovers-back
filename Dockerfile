# Используем базовый образ с Node.js
FROM node:22.6.0-alpine as build

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения в рабочую директорию
COPY . .

RUN npm run build


# Определяем команду для запуска приложения
CMD ["npm", "run", "start"]