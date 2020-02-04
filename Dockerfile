FROM nginx:1.17.7

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html

# Change default config to enable directory indexing
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy all served files into nginx static file folder
COPY ./src /usr/share/nginx/html/
