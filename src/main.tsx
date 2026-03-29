import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  // O StrictMode é uma boa prática durante o desenvolvimento
  <StrictMode>
    <App />
  </StrictMode>,
);
