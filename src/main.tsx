import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // O StrictMode é uma boa prática durante o desenvolvimento
  <StrictMode>
    <App />
  </StrictMode>,
);
