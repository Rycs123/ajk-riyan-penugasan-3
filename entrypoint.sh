#!/bin/sh

# Ensure the app key is set
php artisan key:generate

echo "Waiting for MySQL to be ready..."
until mysql -h mysql -u root -proot -e "SHOW DATABASES;" > /dev/null 2>&1; do
    sleep 3
done

# Run migrations and seed the database
php artisan migrate
php artisan db:seed

# Ensure storage is linked
php artisan storage:link

# Start Supervisor
exec supervisord -c /etc/supervisor/conf.d/supervisord.conf
