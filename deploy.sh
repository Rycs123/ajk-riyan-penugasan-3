#!/bin/bash

sudo docker pull ${{ secrets.DOCKER_USERNAME }}/mysql:latest
sudo docker pull ${{ secrets.DOCKER_USERNAME }}/backend:latest
# sudo docker pull ${{ secrets.DOCKER_USERNAME }}/frontend:latest
# sudo docker pull ${{ secrets.DOCKER_USERNAME }}/nginx:latest

sudo docker stop mysql || true && sudo docker rm mysql || true
sudo docker stop backend || true && sudo docker rm backend || true
# sudo docker stop frontend || true && sudo docker rm frontend || true
# sudo docker stop nginx || true && sudo docker rm nginx || true

sudo docker network create newNetwork || true

sudo docker run -d --name mysql -h mysql --network newNetwork -e MYSQL_ROOT_PASSWORD=${{ secrets.MYSQL_ROOT_PASSWORD }} -e MYSQL_DATABASE=${{ secrets.MYSQL_DATABASE }} -p 3306:3306 ${{ secrets.DOCKER_USERNAME }}/mysql

for i in {1..30}; do
  if sudo docker exec mysql mysqladmin ping -h"localhost" --silent; then
    echo "MySQL is up and running"
    break
  fi
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

sleep 10

sudo docker run -d --name backend -h backend --network newNetwork -e DB_HOST=mysql -e DB_USERNAME=${{ secrets.DB_USERNAME }} -e DB_PASSWORD=${{ secrets.DB_PASSWORD }} -e DB_DATABASE=${{ secrets.DB_DATABASE }} -p 9000:9000 ${{ secrets.DOCKER_USERNAME }}/backend

sleep 10

sudo docker exec backend php artisan migrate
sudo docker exec backend php artisan db:seede

# sudo docker run -d --name frontend -h frontend --network newNetwork -p 3000:3000 ${{ secrets.DOCKER_USERNAME }}/frontend
# sudo docker run -d --name nginx -h nginx --network newNetwork -p 80:80 ${{ secrets.DOCKER_USERNAME }}/nginx
