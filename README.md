# JWT Project

This project is an implementation of authentication and authorization using JSON Web Tokens (JWTs) in Node.js and Express.js with MongoDB as the database.

## Prerequisites

- Express
- MongoDB
- bcript
- nodemon
- dotenv
- mongoose
- jsonwebtoken

## Installation

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the server using `npm run dev`.

## Usage

1. Register a new user by sending a POST request to `/register` with the following parameters:
   - `username`: The username of the user.
   - `password`: The password of the user.
2. Log in by sending a POST request to `/login` with the following parameters:
   - `username`: The username of the user.
   - `password`: The password of the user.
3. Access the protected route by sending a GET request to `/protected` with the following header:
   - `Authorization`: `Bearer <token>`, where `<token>` is the token received after logging in.


