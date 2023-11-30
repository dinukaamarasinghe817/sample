FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Create a non-root user with UID 10014
RUN adduser -D -u 10014 myuser

# Give ownership of the app directory to the non-root user
RUN chown -R myuser:myuser /app

USER myuser

EXPOSE 3000

CMD ["npm", "start"]
