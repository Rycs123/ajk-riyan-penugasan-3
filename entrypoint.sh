#!/bin/sh

# Wait for the database to be ready
# Customize the following as per your database configuration
echo "Waiting for database connection..."
until nc -z -v -w30 $DB_HOST $DB_PORT
do
  echo "Waiting for database connection at $DB_HOST:$DB_PORT..."
  sleep 1
done

# Run migrations and seeders
php artisan migrate --force
php artisan db:seed --force

# Clear and cache configurations
php artisan route:clear
php artisan config:clear
php artisan cache:clear
php artisan storage:link
php artisan key:generate

# Start PHP-FPM
exec "$@"
