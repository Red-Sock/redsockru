FROM node:22 AS build

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY . /app

RUN rm -rf node_modules && npm install && npm run build

FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
