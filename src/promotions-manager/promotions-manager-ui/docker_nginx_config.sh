#!/bin/bash

cd /etc/nginx/sites-available/
cp default default.backup
cat << EOF > ./default
server {
	listen $PORT default_server;
	listen [::]:$PORT default_server;
	root /var/www/promotions-manager;
	server_name _;
	index index.html index.htm;
	location /api {		
		set \$api_endpoint "http://promotions-manager-api.$DOMAIN_NAME:$API_PORT/api";
		proxy_pass \$api_endpoint;
		proxy_http_version 1.1;
		proxy_set_header Upgrade \$http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host \$host;
		proxy_cache_bypass \$http_upgrade;
		proxy_read_timeout 600s;
	}
	location / {
		try_files \$uri /index.html;
	}
}
EOF