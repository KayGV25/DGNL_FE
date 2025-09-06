import { Link } from 'react-router-dom'
import VerifyOtpForm from '@/features/auth/components/VerifyOtpForm'

export default function VerifyOtpPage() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <div className='flex items-center border-b p-6'>
        <Link to='/' className='hover:text-primary text-xl font-semibold transition-colors'>
          DGNL WEB
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-center p-6'>
        <div className='w-full max-w-md space-y-8'>
          <div className='space-y-2 text-center'>
            <h2 className='text-3xl font-bold tracking-tight'>Xác thực OTP</h2>
            <p className='text-muted-foreground text-base'>
              Nhập mã xác thực gồm 6 chữ số đã gửi đến email/số điện thoại của bạn
            </p>
          </div>
          <div className='bg-card rounded-lg border p-8 shadow-sm'>
            <VerifyOtpForm />
          </div>
        </div>
      </div>
    </div>
  )
}
