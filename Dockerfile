FROM richarvey/nginx-php-fpm:1.10.3

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/* /var/www/html/*

# Change default config to enable directory indexing
#COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx-php/sites-available/default.conf /etc/nginx/sites-available/default.conf

# Copy all served files into nginx static file folder
#COPY ./src /usr/share/nginx/html/
COPY ./src /var/www/html/
