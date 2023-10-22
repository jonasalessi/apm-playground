FROM node:19.9.0 as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM busybox:latest
WORKDIR /www
COPY --from=build /app/dist .
EXPOSE 3000
CMD ["httpd", "-f", "-p", "3000", "-h", "/www"]
