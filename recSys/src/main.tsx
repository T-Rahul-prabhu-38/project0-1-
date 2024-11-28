import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RecSys from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecSys />
  </StrictMode>
);