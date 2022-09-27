FROM node:14-alpine

ARG NODE_ENV=development

WORKDIR /app

COPY package.json ./

RUN yarn add picomatch glob rimraf glob-parent braces
RUN yarn install --frozen-lockfile

ARG NODE_ENV=production

COPY . .

RUN yarn run build

CMD ["node", "dist/main"]
