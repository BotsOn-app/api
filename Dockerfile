FROM node:18.8.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production --quiet

COPY . .
RUN npm run build

EXPOSE 8000
CMD [ "npm", "run", "start" ]