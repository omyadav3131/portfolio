import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

function Root() {
  return (
    // <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);