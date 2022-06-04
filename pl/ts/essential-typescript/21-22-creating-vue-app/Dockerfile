FROM node:16.15.0

RUN mkdir -p /usr/src/app

COPY dist /usr/src/app/dist/
COPY data.json /usr/src/app/
COPY server.js /usr/src/app/
COPY deploy-package.json /usr/src/app/package.json

WORKDIR /usr/src/app

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4003

CMD ["node", "server.js"]
