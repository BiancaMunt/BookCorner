# BookCorner

BookCorner is a web application for book enthusiasts to discover new books. The app includes a frontend built with React and Typescript and a backend built with Node.js and Express.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)

## Getting Started

To get started with the app, clone the repository and install the dependencies:

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BiancaMunt/BookCorner.git

2. Install both client and server side dependencies
    ```sh
    npm run install:all

3. Run the app
    ```sh
    npm run start

4. To see Docker in action, run the following commands
> Builds the images for both the client and server: 
    ```
      docker-compose build
    ```
> Starts the containers for both services:
    ```
      docker-compose up
    ```
> App should then be accesible on port 3000

5. Troubleshooting
  * If you're having trouble accessing the app at http://localhost:3000, make sure that the Docker containers are running correctly by running `docker ps` and checking the status of the containers.
  * If you're still having trouble, try restarting Docker and/or rebuilding the Docker images with `docker-compose build`.
  * If you're encountering errors related to ports being already in use, make sure that you're not running any other processes that are listening on the same port as the Docker containers.

