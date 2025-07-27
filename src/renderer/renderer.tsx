import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './pages/loginPage';
import './styles'

// Get the root element from your HTML
const container = document.getElementById('root');

if (container) {
  // Create a React root and render the app
  const root = createRoot(container);
  root.render(<LoginPage />);
} else {
  console.error('Root element not found!');
}
