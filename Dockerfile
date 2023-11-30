FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN adduser -D -u 10014 myuser

RUN chown -R myuser:myuser /app

USER myuser

EXPOSE 3000

CMD ["npm", "start"]