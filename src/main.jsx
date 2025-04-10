import React from 'react';
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage';
import ThemeProvider from '@/components/ui/theme-provider';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
