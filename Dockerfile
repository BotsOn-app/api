FROM node:18.8.0-alpine as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --quiet

COPY prisma .
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:18.8.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production --quiet
RUN npx prisma generate
COPY --chown=node:node --from=builder /usr/src/app/prisma /usr/src/app/prisma
COPY --chown=node:node --from=builder /usr/src/app/src /usr/src/app/src

EXPOSE 8000
CMD [ "pnpm", "run", "start:ci" ]