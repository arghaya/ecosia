FROM node:18-alpine3.15

#RUN apk update && apk add curl bash wget  -y --no-cache

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

COPY --chown=node . .

RUN npm i

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}

CMD [ "node", "server.js" ]