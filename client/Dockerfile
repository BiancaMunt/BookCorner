# Use an official Node runtime as a parent image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /client

# Copy the package files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Serve the React app using http-server
RUN npm install -g http-server
EXPOSE 3000
CMD ["http-server", "-p", "3000", "build"]
