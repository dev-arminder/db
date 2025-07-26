import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Simple React component
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>💖 Hello from React!</h1>
      <p>Welcome to your Electron + React application.</p>
      <p>This is rendered using React 18 with TypeScript.</p>
    </div>
  );
};

// Get the root element from your HTML
const container = document.getElementById('root');

if (container) {
  // Create a React root and render the app
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found!');
}
