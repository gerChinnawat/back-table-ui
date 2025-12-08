FROM node:22-trixie-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.production .env

RUN npm run build

EXPOSE 3003

CMD ["npm", "start"]