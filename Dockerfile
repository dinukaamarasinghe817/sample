# Build stage
FROM node:17-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.19.0

# Create a non-root user
RUN addgroup -g 1001 -S appuser && \
    adduser -u 1001 -S appuser -G appuser

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove the default contents of the NGINX html directory
RUN rm -rf ./*

# Copy the build output from the builder stage to the NGINX html directory
COPY --from=builder --chown=appuser:appuser /app/build .

# Switch to the non-root user
USER appuser

# Set the entrypoint for the container
ENTRYPOINT ["nginx", "-g", "daemon off;"]
