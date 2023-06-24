FROM node:lts-alpine AS prod

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build