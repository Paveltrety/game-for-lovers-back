# Используем базовый образ с Node.js
FROM node:18

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения в рабочую директорию
COPY . .


# Определяем команду для запуска приложения
CMD ["node", "index.ts"]