# Cab System Backend

This is a simple Node.js backend built with Express and managed with Yarn package manager.

- frontend Github = https://github.com/mpatwa98/cab-system-frontend
- backend Github = https://github.com/mpatwa98/cab-system-backend

- frontend Hosted = https://cab-system-frontend-mpatwa98.vercel.app/
- backend Deployed = https://cab-system-backend.onrender.com

## Features

## ✅ Car Availability

- After a booking is done that cab will not be available to other until its journey is over.
- Go to Cab Management to make any cab Available.

## ✅ Responsiveness

- Web app is mostly responsive to almost all screen sizes. (Under Development)
- Create issue on repo if found (Since testing on all screen size is not possible for me).
- Beautiful UI implemented for better user experiences.

## ✅ Booking Confirmation Email

- When a booking is confirmed, server sends an email.

## ✅ Shortest Time estimation

- A graph is designed and Dijkstra Algorithm is used to estimate the shortest path

## ✅ 5 Cab Type (Cab Management - Change Price Per Minute)

- 5 cab type are implemented, also there price per minute can be changed by the admin

## Prerequisites

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/mpatwa98/cab-system-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cab-system-backend
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

To start the server, run:

```bash
yarn start
```

The server will start running at `http://localhost:8080` by default.

## Available Scripts

In the project directory, you can run the following commands:

### `yarn start`

Runs the server in production mode.

### `yarn dev`

Runs the server in development mode with nodemon for auto-reloading.

## Project Structure

```
cab-system-backend/
  ├── config/              # Configuration files
  ├── controllers/         # Express controllers
  ├── models/              # Data models
  ├── routes/              # Route definitions
  ├── .env                 # Environment variables
  ├── .gitignore           # Specifies intentionally untracked files
  ├── .loadEnvironment.mjs # Load Environment Variables
  ├── package.json         # Project metadata and dependencies
  ├── README.md            # Project README file
  └── yarn.lock            # Yarn lock file
```
