FROM node:18.8.0-alpine as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --quiet

COPY prisma ./prisma
COPY . .
RUN npm run generate
RUN npm run build

FROM node:18.8.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production --quiet
COPY --chown=node:node --from=builder /usr/src/app/prisma /usr/src/app/prisma
COPY --chown=node:node --from=builder /usr/src/app/dist /usr/src/app/dist

EXPOSE 8000
CMD [ "node", "dist/main.js" ]