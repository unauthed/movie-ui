#!/usr/bin/env bash

function finish {
  docker-compose down > /dev/null 2>&1
  docker volume rm --force movieui_mongo-volume > /dev/null 2>&1
}

trap finish EXIT

echo Build and run this service

rm -rf ./dist

npm run build

docker build -t unauthed/movie-ui:latest .

docker-compose up -d

sleep 8s

xdg-open http://localhost

docker-compose logs -f
