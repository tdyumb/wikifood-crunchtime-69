
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Import styles
import './index.css'

// Get the root element
const rootElement = document.getElementById("root");

// Check if root exists
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create and render root
const root = createRoot(rootElement);
root.render(<App />);
