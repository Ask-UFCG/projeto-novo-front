FROM node:12.2.0-alpine

ENV CI="true"
ENV PORT=80

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

CMD ["yarn", "run", "start"]

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install --no-optional --verbose

VOLUME /app/node_modules

COPY . /app
