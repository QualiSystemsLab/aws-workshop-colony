FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y curl; \
    curl -sL https://deb.nodesource.com/setup_10.x | bash -; \
    apt-get install nodejs -y; \
    apt-get install nginx -y

ENV DOMAIN_NAME="sandbox.com" \
    PORT="3000" \
    API_PORT="3001"

COPY build /var/www/promotions-manager/

COPY docker_nginx_config.sh /script/

RUN chmod +x /script/docker_nginx_config.sh && /script/docker_nginx_config.sh

CMD ["nginx", "-g", "daemon off;"]