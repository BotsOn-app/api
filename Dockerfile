FROM node:18.8.0-alpine as builder
RUN npm install -g pnpm
WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY prisma ./prisma
COPY . .
RUN pnpm run generate
RUN pnpm run build

FROM node:18.8.0-alpine
RUN npm install -g pnpm
WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
COPY --chown=node:node --from=builder /usr/src/app/prisma /usr/src/app/prisma
COPY --chown=node:node --from=builder /usr/src/app/dist /usr/src/app/dist
RUN pnpm run generate

EXPOSE 8000
CMD [ "pnpm", "run", "start:prod" ]