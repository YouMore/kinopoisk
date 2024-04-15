FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV REACT_APP_TOKEN=pypypy2

CMD ["npm", "run", "start"]
