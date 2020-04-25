FROM node

WORKDIR /usr/app/src

COPY package.json .

RUN ["npm", "install"]

COPY server .

COPY scripts .

CMD ["]