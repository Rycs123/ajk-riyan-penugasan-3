#!/bin/bash

# Run migrations
php artisan migrate

# Start PHP-FPM
php-fpm
