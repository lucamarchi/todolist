FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
ENV MONGO_URL=mongodb://mongo:27017/dev
CMD [ "npm", "start" ]
