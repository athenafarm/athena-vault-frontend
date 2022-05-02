# build environment
FROM node:16.13-alpine AS builder

ARG LCD_URL

ENV LCD_URL=$LCD_URL

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# node-gyp dependencies
RUN apk add --update python make g++ git && rm -rf /var/cache/apk/*

# Install dependencies from package-lock.json
RUN npm ci --no-audit --no-fund

COPY . .

RUN npm run build

# production environment
FROM nginx:stable-alpine AS build

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
