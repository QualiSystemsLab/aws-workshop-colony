FROM ubuntu:16.04

# Update Ubuntu Software repository
RUN apt-get update

# Install nodejs
RUN apt install curl -y && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt install nodejs -y

# Install nginx
RUN apt-get install nginx -y && service nginx stop

# Install PM2, it provides an easy way to manage and daemonize nodejs applications
RUN npm install -g pm2

CMD ["/bin/bash"]