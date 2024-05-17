#!/bin/bash

# Wait for MySQL to become available
until mysqladmin ping -h"$MYSQL_HOST" -uroot -p"$MYSQL_ROOT_PASSWORD" --silent; do
    >&2 echo "MySQL is unavailable - sleeping"
    sleep 1
done

>&2 echo "MySQL is up - continuing"

# Run Laravel migrations
php artisan migrate

php artisan db:seed

# Execute the command passed to the entrypoint
exec "$@"
