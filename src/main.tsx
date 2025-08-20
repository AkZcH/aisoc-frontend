import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize scroll animations
import './hooks/useScrollAnimation';

createRoot(document.getElementById("root")!).render(<App />);
