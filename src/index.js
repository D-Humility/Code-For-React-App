import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const DATA = [
  { id: "guest-1", fname: "Meshach Okonkwo", email: "meshach@example.com", gender: "Male", phone: "08106290490", dor: "10/01/2023" },
  { id: "guest-2", fname: "David Disu", email: "david@example.com", gender: "Male", phone: "08188621047", dor: "11/01/2023" },
  { id: "guest-3", fname: "Zipporah Okonkwo", email: "zipporah@example.com", gender: "Female", phone: "09066578733", dor: "12/01/2023" }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App guests={DATA} />
  </React.StrictMode>
);

