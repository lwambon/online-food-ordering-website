# Telemedicine Website

## Overview

This project is a full-stack telemedicine website designed to facilitate online medical consultations. It provides a platform for patients, doctors, and administrators to interact seamlessly. The website includes separate login portals for each user type and offers various features tailored to their specific needs.

## Tech Stack

### Frontend: React

### Backend: Express, Node.js

### Database: Prisma ORM (working with a relational database)

## Features

## Patient Portal

Register and log in to the platform  
Book appointments with doctors  
View and manage appointment history  
Access prescriptions and medical records

## Doctor Portal

Log in to the platform  
Manage appointments and schedules  
Provide prescriptions and notes for patients  
View patient history and records

## Admin Portal

Manage users (patients and doctors)  
Monitor and resolve system issues  
Oversee appointments and platform activities

## Installation and Setup

Clone the repository:

git clone <repository-url>  
`cd telemedicine-website`

## Install dependencies:

`npm install `  
`cd client && npm install `  
`cd ../server && npm install`

## Set up the database:

Configure the Prisma schema in server/prisma/ schema.prisma.

## Run the following commands to generate Prisma Client and migrate the database:

npx prisma generate
npx prisma migrate dev --name init

Run the development server:

Start the backend server:

`cd server   `  
`npm run dev`

Start the frontend server:

`cd client`  
`npm start`

Access the application:

Open your browser and navigate to http://localhost:3000.

Folder Structure

` telemedicine-website/  
|
|-- client/              # React frontend
|   |-- src/
|       |-- components/  # Reusable React components
|       |-- pages/       # Pages for the app (Patient, Doctor, Admin)
|       |-- services/    # API integration services
|
|-- server/              # Express backend
|   |-- prisma/          # Prisma schema and migrations
|   |-- routes/          # API routes for various functionalities
|   |-- controllers/     # Logic for handling API requests
|   |-- models/          # Prisma models
|   |-- middleware/      # Middleware for authentication, etc.
|
|-- .env                 # Environment variables (database URL, secrets, etc.)
|-- package.json         # Dependencies and scripts
|-- README.md            # Project documentation`

Environment Variables

Create a .env file in the server directory and include the following:

DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
PORT=5000

Contributing

Contributions are welcome! To contribute:

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-name)

Open a pull request
