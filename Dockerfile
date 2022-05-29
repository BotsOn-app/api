FROM node:14-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install --quiet

COPY prisma .

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8000

WORKDIR /app

CMD [ "npm", "run", "start:prod" ]

