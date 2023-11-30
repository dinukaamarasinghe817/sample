FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN chown -R 10014:10014 /app

USER 10014

EXPOSE 3000

CMD ["npm", "start"]