import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Add this line to import the CSS file
import GymSharingApp from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GymSharingApp />
  </React.StrictMode>
);
