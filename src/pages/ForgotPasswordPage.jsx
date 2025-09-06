'use client'

import { Link } from 'react-router'
import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <div className='flex items-center border-b p-6'>
        <Link to='/' className='hover:text-primary text-xl font-semibold transition-colors'>
          DGNL WEB
        </Link>
      </div>
      <div className='mt-6 flex flex-1 justify-center p-2'>
        <div className='w-full max-w-md space-y-5'>
          <h2 className='text-center text-3xl font-bold tracking-tight'>Quên Mật Khẩu</h2>
          <div className='bg-card rounded-lg border p-8 shadow-sm'>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}
