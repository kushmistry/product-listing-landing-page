# product-listing-landing-page
simple web-application.

# for docker create images and container

# Build the frontend image
docker build -t frontend-image -f Dockerfile.frontend .

# Build the backend image
docker build -t backend-image -f Dockerfile.backend .

# Run the frontend container
docker run -p 80:80 frontend-image

# Run the backend container
docker run -p 8000:8000 backend-image
