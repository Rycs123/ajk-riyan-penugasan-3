FROM node:20 AS build-frontend

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM php:8.1-fpm

WORKDIR /var/www

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    libzip-dev


RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www

COPY --from=build-frontend /app/public/js /var/www/public/js
COPY --from=build-frontend /app/public/css /var/www/public/css

RUN chown -R www-data:www-data \
    /var/www/storage \
    /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
