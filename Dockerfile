FROM node:14.16.1-alpine3.10 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:1.19.10-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html/frontend/
COPY nginx.conf /etc/nginx/conf.d/default.conf