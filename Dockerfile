# build environment
FROM node:16.13-alpine AS builder

ARG LCD_URL

ENV LCD_URL=$LCD_URL

# Create app directory
WORKDIR /usr/src/app

# node-gyp dependencies
RUN apk add --update --no-cache python3 make g++ && rm -rf /var/cache/apk/*

COPY package*.json ./

# Install dependencies from package-lock.json
RUN npm ci --no-audit --no-fund

COPY . .

RUN npm run build

# production environment
FROM nginx:stable-alpine AS build

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
