# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Profile Map App

## Overview
Profile Map App is a React-based profile management system that displays user profiles along with their geographical locations on Google Maps. It includes an admin panel for managing profiles and a search functionality for filtering users.

## Features
- View user profiles with names, descriptions, and images.
- Display user locations on an interactive Google Map.
- Search functionality to filter profiles.
- Admin panel to add, edit, and delete profiles.

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/profile-map.git
   cd profile-map
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`.


## Deployment
To build and deploy the application:
```sh
npm run build
```
The production-ready files will be available in the `dist/` folder. You can deploy this to any static hosting service like Vercel, Netlify, or GitHub Pages.

Feel free to contribute by submitting issues or pull requests! 🚀
