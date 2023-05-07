FROM node:18.8.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY prisma .

COPY . .

RUN npx prisma generate

EXPOSE 8000

CMD [ "npm", "run", "start:dev" ]

