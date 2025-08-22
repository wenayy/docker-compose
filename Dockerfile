FROM node:18-alpine  AS base

WORKDIR /myapp
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install 

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

 





RUN npm run build

EXPOSE 3000

CMD ["npm","start"]

