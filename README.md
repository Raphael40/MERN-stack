# React Workout App

This repository contains a React-based workout application that allows users to create and manage workouts. The frontend is built using React, and the backend is powered by MongoDB Atlas. The application is designed to create, view, and delete workouts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Backend](#backend)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone this repository to your local machine:

```bash
git clone <repository_url>
cd react-workout-app
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd backend
npm install
```

## Usage

To start the application, follow these steps:

1. Start the frontend development server:

```bash
cd frontend
npm start
```

This will start the React development server, and the application will be accessible at http://localhost:3000.

2. Ensure the backend is running:

Make sure you have MongoDB Atlas set up with the required configurations. The backend server will interact with MongoDB Atlas to handle CRUD operations for workouts. You may need to create a .env file to store your Mongodb cluster key and the port.

3. 

```bash
cd backend
npm start
```

The backend server will run at http://localhost:5000.

Now you can use the React workout application to create and manage your workouts!

## Backend

The backend of this application is built using Express.js and interacts with MongoDB Atlas to store workout data.

The backend is located in the backend/ directory of the repository.

## Contributing

If you'd like to contribute to this project, you can fork the repository and create pull requests with your improvements. Contributions are always welcome!

