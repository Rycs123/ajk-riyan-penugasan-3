#!/bin/bash

cd /var/www/fullstack

php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear
php artisan key:generate

echo "Waiting for MySQL to be ready..."
until mysql -h mysql -u root -proot -e "SHOW DATABASES;" > /dev/null 2>&1; do
    sleep 3
done
echo "MySQL is ready..."

php artisan migrate
echo "php artisan migrate done"

php artisan db:seed
echo "php artisan db:seed done"

php artisan storage:link
echo "php artisan sl done"

php artisan serve

php-fpm
nginx -g 'daemon off;'
