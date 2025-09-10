'use client'

import { Link } from 'react-router-dom'
import RegisterForm from '@/features/auth/components/RegisterForm'
export default function RegisterPage() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <div className='flex items-center border-b p-6'>
        <Link to='/' className='hover:text-primary text-xl font-semibold transition-colors'>
          DGNL WEB
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-center p-2'>
        <div className='w-full max-w-md space-y-5'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight'>Đăng Ký</h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
