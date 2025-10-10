# Use nginx alpine image
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY admin.html /usr/share/nginx/html/
COPY generate-qr.html /usr/share/nginx/html/

# Create custom nginx config
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
