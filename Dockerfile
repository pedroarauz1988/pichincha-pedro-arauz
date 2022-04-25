FROM node:12 as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm rebuild node-sass
RUN npm run build -- --prod


FROM nginx:alpine
COPY --from=node /app/dist/pichincha-pedro-arauz /usr/share/nginx/html
