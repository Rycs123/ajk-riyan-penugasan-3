FROM node:20 AS build-frontend

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run dev

RUN npm run build

FROM php:8.1-fpm

WORKDIR /var/www

RUN apk update && apk --no-cache add \
    git \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    nginx \
    build-essential \
    libjpeg-dev \
    libfreetype6-dev \
    locales \
    jpegoptim optipng pngquant gifsicle \
    vim \
    libonig-dev \
    libzip-dev \
    && apk cache clean && rm -rf /var/lib/apt/lists/*


RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www

COPY --from=build-frontend /resources/css /var/www/public/js
COPY --from=build-frontend /resources/js /var/www/public/css

RUN chown -R www-data:www-data \
    /var/www/storage \
    /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
