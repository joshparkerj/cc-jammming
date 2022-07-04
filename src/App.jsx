import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = function App() {
  return (
    <div className="app">
      <h1>Jammming App</h1>
    </div>
  );
};

createRoot(document.getElementById('app-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
