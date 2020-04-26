FROM node

WORKDIR /usr/app/src

COPY package.json .

RUN ["npm", "install"]

COPY . .

CMD ["npm", "run", "server:start"]