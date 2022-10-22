FROM node:18.8.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma .

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8000

WORKDIR /app

CMD [ "npm", "run", "start:prod" ]

