#!/bin/bash

php artisan key:generate

php artisan migrate

php artisan db:seed

php artisan storage:link

php artisan serve --host=backend

php-fpm
