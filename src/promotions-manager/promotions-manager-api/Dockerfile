FROM ubuntu:16.04

RUN apt-get update -y && apt install -y curl; \
    curl -sL https://deb.nodesource.com/setup_10.x | bash -; \
    apt install nodejs -y

COPY . /var/promotions-manager-api

ENV DATABASE_HOST="localhost" \
    API_PORT="3001" \
    RELEASE_NUMBER="none" \
    API_BUILD_NUMBER="none"    

WORKDIR /var/promotions-manager-api

CMD ["node", "index.js"]