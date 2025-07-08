# WorldWise

WorldWise is a modern web application that lets users manage cities, countries, and geolocation data with ease. Built using React and Vite, it features simulated authentication, protected routes, and dynamic data fetching for an interactive experience.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## Features

- **Fake Authentication**: Simulated login functionality with protected routes for demonstration purposes.
- **Dynamic Data**: Fetch and display cities and countries dynamically.
- **Interactive Map**: Visualize geolocation data on an interactive map.

## Folder Structure

```
src/
├── App.jsx                # Main application component
├── index.css              # Global styles
├── main.jsx               # Application entry point
├── components/            # Reusable UI components
│   ├── AddCityForm.jsx    # Form to add a new city
│   ├── AppLayout.jsx      # Layout wrapper for the app
│   ├── AppNav.jsx         # Navigation bar
│   ├── Button.jsx         # Custom button component
│   ├── Cities.jsx         # List of cities
│   ├── City.jsx           # Single city component
│   ├── Countries.jsx      # List of countries
│   ├── Header.jsx         # Header component
│   ├── Input.jsx          # Custom input field
│   ├── LoginForm.jsx      # Login form
│   ├── LoginLink.jsx      # Link to login page
│   ├── Map.jsx            # Interactive map component
│   ├── ProtectedRoute.jsx # Route protection logic
│   ├── Textarea.jsx       # Custom textarea component
│   ├── UserBox.jsx        # User profile box
├── config/                # Configuration files
│   └── index.js           # App configuration
├── contexts/              # React context providers
│   ├── AuthContext.jsx    # Authentication context
│   ├── CitiesContext.jsx  # Cities data context
│   └── GeoLocationContext.jsx # Geolocation context
├── hooks/                 # Custom React hooks
│   └── use-fetch.js       # Hook for data fetching
├── pages/                 # Application pages
│   ├── HomePage.jsx       # Home page
│   ├── LoginPage.jsx      # Login page
│   ├── PricingPage.jsx    # Pricing page
│   └── ProductPage.jsx    # Product page
├── utils/                 # Utility functions
│   └── index.js           # General utilities
```

## Installation

1. Clone

```bash
git clone https://github.com/AmanGupta1703/WorldWise.git
```

2. Navigate to the project directory:

```bash
cd WorldWise
```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Open your browser and navigate to `http://localhost:5173` to view the app.
- Use the login form to authenticate and access protected routes.
- Explore cities, countries, and geolocation data.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **React Router**: For routing and navigation.
- **Context API**: For state management.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Credits

- This project is part of a React course by **Jonas Schmedtmann**.
