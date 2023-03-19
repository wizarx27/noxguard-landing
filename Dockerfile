FROM node:slim
WORKDIR /app
COPY . .
RUN npm install
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm run build

FROM nginx:mainline-alpine-slim
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/build/. .