FROM node:12-alpine

#COPY . /home

WORKDIR /home

RUN npm install

CMD ["npm", "start"]
