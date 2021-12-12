FROM node:16-alpine

COPY ./apps/react-17/ /app

WORKDIR /app/react-17
RUN npm install

CMD npm start