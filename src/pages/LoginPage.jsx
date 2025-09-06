'use client'

import { Link } from 'react-router-dom'
import { LoginForm } from '@/features/auth/components/LoginForm'

export default function LoginPage() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <div className='flex items-center border-b p-6'>
        <Link to='/' className='hover:text-primary text-xl font-semibold transition-colors'>
          DGNL WEB
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-center p-6'>
        <LoginForm />
      </div>
    </div>
  )
}
