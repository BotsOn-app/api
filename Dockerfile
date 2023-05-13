FROM node:18.8.0-alpine

WORKDIR /usr/src/app

RUN npm i -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install

COPY prisma .

COPY . .

RUN pnpx prisma generate

EXPOSE 8000

CMD [ "pnpm", "run", "start:ci" ]

