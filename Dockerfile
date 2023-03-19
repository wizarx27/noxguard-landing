FROM node:slim
WORKDIR /app
COPY . .
RUN npm install
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm build