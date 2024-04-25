# RANDOM USER GENERATOR PROJECT

## Introduction

This React application fetches and displays details of random users with pagination. Navigate through a maximum of 100 users, with 10 users displayed per page. Built with React, React Router DOM, Redux, and Bootstrap for a dynamic and user-friendly experience.

## Getting Started

1. Prerequisites:
   Node.js and npm installed on your system.

2. Clone the Repository:

```
git clone https://github.com/lynguyen-mia/react-random-user-generator.git
```

3. Install dependencies:

```
cd react-random-user-generator
npm install
```

4. Run the Application:
   This will start the development server and open the application in your default browser, typically at `http://localhost:3000`.

```
npm start
```

## Tech stack

- React: JavaScript library for building user interfaces.
- React Router DOM: Enables routing for navigation within the application.
- Redux: State management library for managing application state.
- Bootstrap: CSS framework for responsive design and common UI components.
- Data: Data fetched from a third-party API: https://randomuser.me/api

## Features

- Displaying 10 random users per page.
- Navigating through user data using 10 pagination buttons, which allows to display a maximum of 100 users.
- Sorting users ascendingly or descendingly based on fullname or username
- Useing Redux to manage application state for users and pagination information.
- Employing Bootstrap for responsive table layout and styling.
