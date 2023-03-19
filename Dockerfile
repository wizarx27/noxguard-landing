FROM node:slim
RUN git clone https://github.com/wizarx27/noxguard-landing.git /app
WORKDIR /app
RUN npm install
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm build