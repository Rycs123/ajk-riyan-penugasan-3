#!/bin/bash

php artisan key:generate

php artisan migrate

php artisan db:seed

php artisan storage:link

php artisan serve --host=0.0.0.0 --port=9000

php-fpm
