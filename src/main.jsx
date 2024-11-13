import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {FirebaseProvider} from './context/Firebase.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <FirebaseProvider>
    <BrowserRouter>
      <App />
      <ToastContainer limit={1} autoClose={2000}/>
    </BrowserRouter>
    </FirebaseProvider>
  </StrictMode>
  
)
