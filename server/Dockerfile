# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /server
WORKDIR /server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3001 to the Docker host
EXPOSE 3001

# Start the app
CMD ["npm", "start"]
