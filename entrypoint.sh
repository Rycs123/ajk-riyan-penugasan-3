#!/bin/sh

# Ensure the app key is set
php artisan key:generate

# Run migrations and seed the database
php artisan migrate
php artisan db:seed

# Ensure storage is linked
php artisan storage:link

# Start PHP-FPM
php-fpm
