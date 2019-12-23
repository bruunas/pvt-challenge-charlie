FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "node", "spa-server.js" ]