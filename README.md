# Revision Assignments

A React-based web application showcasing multiple interactive assignments and demonstrations. This project serves as a revision exercise covering fundamental React concepts including state management, routing, component composition, and form handling.

## Project Overview

This application demonstrates key React and web development concepts through several interactive pages:

- **Home Page** - Navigation hub with links to all assignments
- **Student Card Assignment** - Display of student profiles with customizable themes
- **Counter Assignment** - Interactive emoji-based counter game with increment/decrement functionality
- **Authentication Assignment** - Login and signup form components with state switching

## Features

### 🎓 Student Card Page

- Displays student information in card format
- Supports dark and light theme modes
- Shows student details including roll number, batch, and favorite programming language
- Dynamic card rendering with Tailwind CSS styling

### 🎉 Counter Assignment

- Emoji-based interactive counter game
- Increment and decrement functionality
- Reset button to return counter to zero
- Minimum value constraint (counter cannot go below 0)
- Beautiful gradient background with responsive design

### 🔐 Authentication Assignment

- Toggle between Login and SignUp components
- Form-based user authentication interface
- State management for switching between login and signup modes

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.12.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ESLint** - Code quality and linting

## Project Structure

```
src/
├── components/
│   ├── Login.jsx           # Login form component
│   ├── SignUp.jsx          # SignUp form component
│   └── StudentCard.jsx     # Student card display component
├── pages/
│   ├── Home.jsx            # Home page with navigation
│   ├── Card.jsx            # Student card assignment page
│   ├── Count.jsx           # Counter assignment page
│   └── Auth.jsx            # Authentication assignment page
├── App.jsx                 # Main app component with routing
├── App.css                 # App styles
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Routes

- `/` - Home page (navigation hub)
- `/card` - Student Card assignment
- `/counter` - Counter assignment
- `/auth` - Authentication assignment

## Notes

- The React Compiler is enabled in this project for optimized performance
- Uses Tailwind CSS for styling with responsive design
- HMR (Hot Module Replacement) is enabled for faster development
- ESLint is configured for code consistency and best practices

## License

This is a revision assignment project for learning purposes.
