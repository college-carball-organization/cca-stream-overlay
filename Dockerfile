FROM nginx:1.17.7

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html

# Copy all files into nginx static file folder
COPY . /usr/share/nginx/html