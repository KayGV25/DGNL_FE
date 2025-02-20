import React from 'react';
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
