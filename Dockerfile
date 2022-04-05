FROM node:14.8.0-alpine3.10 AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NPM_TOKEN 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
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
COPY .npmrc ./
COPY . .
RUN npm run build

FROM node:14.8.0-alpine3.10
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/lib .
RUN npm publish