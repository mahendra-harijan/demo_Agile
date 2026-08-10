# Project Details App

A React + Vite + Tailwind CSS project that displays a polished project summary page with details such as project name, status, description, tech stack, features, and statistics.

## Features

- Responsive project details layout
- Tailwind-based styling
- Animated UI elements with Framer Motion
- Easy content customization in the main component

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually http://localhost:5173).

## Editing Content

Update the project information in [src/ProjectDetails.jsx](src/ProjectDetails.jsx) by modifying the `project` object near the top of the file.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

- [src/main.jsx](src/main.jsx) - App entry point
- [src/ProjectDetails.jsx](src/ProjectDetails.jsx) - Main project details UI
- [src/index.css](src/index.css) - Global styles and Tailwind imports
