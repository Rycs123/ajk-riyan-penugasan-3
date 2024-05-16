#!/bin/bash

php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear
php artisan key:generate

echo "Waiting for MySQL to be ready..."
until mysql -h mysql -u root -proot -e "SHOW DATABASES;" > /dev/null 2>&1; do
    sleep 10
done

php artisan migrate

php artisan db:seed

php artisan storage:link

php artisan serve

php-fpm
