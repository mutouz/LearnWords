#!/bin/bash
NGINX_DIR=`pwd`
echo ${NGINX_DIR}
docker stop mynginx
docker rm mynginx
docker run -d  --restart always -p 8098:80  --name mynginx \
    -v  /${NGINX_DIR}/html:/usr/share/nginx/html  \
    -v  /${NGINX_DIR}/conf.d:/etc/nginx/conf.d \
    -v  /${NGINX_DIR}/config/nginx.conf:/etc/nginx/nginx.conf \
    -v  /${NGINX_DIR}/logs:/var/log/nginx \
    mynginx:v1

EOF