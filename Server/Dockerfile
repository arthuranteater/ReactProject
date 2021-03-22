FROM node:latest
WORKDIR /app/server
ENV PATH /app/node_modules/.bin$PATH
COPY package*.json .
RUN npm install -g npm@7.6.3 && npm i
COPY . .
EXPOSE 8080
CMD ["npm","start"]