FROM nginx:1.17.7

# Copy all files into nginx static file folder
COPY . /usr/share/nginx/html