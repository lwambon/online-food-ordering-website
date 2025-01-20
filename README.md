# Food Ordering Website

## Overview

This project is a full-stack food ordering website designed to simplify the process of browsing, selecting, and ordering meals online. The platform is user-friendly, responsive, and supports seamless interaction between users and the system. It is built using modern web development technologies.

## Tech Stack

### Frontend: React and CSS

- Responsive and visually appealing user interface for browsing meals and managing orders.

### Backend: Express, Node.js

- Handles user authentication, menu data management, and order processing.

### Database: Prisma ORM

- Efficiently manages user details, order history, and menu items.

---

## Features

### Customer Portal

- **User Registration and Login**: Register and securely log in to access accounts.
- **Browse Menu**: Explore a wide variety of meals with images, descriptions, and prices.
- **Order Food**: Add meals to the cart, view order summary, and place orders seamlessly.
- **Order History**: Access and manage past orders.

---

## Installation and Setup

### Clone the repository:

```bash
git clone <repository-url>
cd food-ordering-website
```

## Install dependencies:

```bash

npm install
cd client && npm install
cd ../server && npm install
```

### Set up the database:

Configure the Prisma schema in server/prisma/schema.prisma.  
Run the following commands to generate the Prisma Client and migrate the database:

```bash

npx prisma generate
npx prisma migrate dev --name init
Run the development server:
Start the backend server:
```

```bash
cd server
npm run dev
Start the frontend server:
```

```bash
cd client
npm start
```

Access the application in your browser at http://localhost:3000.

```Folder Structure
plaintext
food-ordering-website/
|
|-- client/              # React frontend
|   |-- src/
|       |-- components/  # Reusable React components (e.g., MealCard, Cart)
|       |-- pages/       # Pages for the app (Home, Menu, Order History)
|       |-- services/    # API integration services
|
|-- server/              # Express backend
|   |-- prisma/          # Prisma schema and migrations
|   |-- routes/          # API routes for menu, orders, and authentication
|   |-- controllers/     # Logic for handling API requests
|   |-- models/          # Prisma models
|   |-- middleware/      # Middleware for authentication, logging, etc.
|
|-- .env                 # Environment variables (database URL, secrets, etc.)
|-- package.json         # Dependencies and scripts
|-- README.md            # Project documentation
```

Environment Variables
Create a .env file in the server directory and include the following:

```
plaintext
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

Contributing
We welcome contributions to improve the platform! Follow these steps to contribute:

### Fork the repository.

Create a feature branch:

```bash

git checkout -b feature-name
Commit your changes:
bash
Copy
git commit -m 'Add feature'
Push to the branch:
bash
Copy
git push origin feature-name
Open a pull request.
```
