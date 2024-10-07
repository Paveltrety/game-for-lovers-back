# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем TypeScript глобально
RUN npm install -g typescript

# Копируем остальные файлы
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]