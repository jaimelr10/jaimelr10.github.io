import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { Contact } from './routes/Contact';
import { Career } from './routes/Career';
import { Education } from './routes/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path:'/career',
    element: <Career />
  },
  {
    path:'/education',
    element: <Education />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
