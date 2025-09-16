import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ErrorPage from './pages/ErrorPage'
import ThemeProvider from '@/components/ui/theme-provider'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/Home'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import VerifyOtpPage from './pages/VerifyOtpPage'
import ExamCreatePage from './features/exam/pages/ExamCreatePage'
import ExamSetupPage from './features/exam/pages/ExamSetupPage'
import ExamCreatedPage from './features/exam/pages/ExamCreatedPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/exams/setup',
        element: <ExamSetupPage />
      },
      {
        path: '/exams/create',
        element: <ExamCreatePage />
      },
      {
        path: '/exams/success',
        element: <ExamCreatedPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/otp',
    element: <VerifyOtpPage />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
