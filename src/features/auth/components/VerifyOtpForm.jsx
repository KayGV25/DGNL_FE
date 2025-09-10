import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useVerifyOtp } from '../hooks/useVerifyOtp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { verifyOtpSchema } from '../schemas/authSchemas'

export default function VerifyOtpForm() {
  const { isLoading, onSubmit } = useVerifyOtp()

  const form = useForm({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='flex justify-center'>
          <InputOTP
            maxLength={6}
            value={form.watch('otp')}
            onChange={(val) => form.setValue('otp', val)}
            containerClassName='gap-2'
            className='text-xl'
          >
            <InputOTPGroup>
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        {form.formState.errors.otp && (
          <div className='text-center text-red-500'>{form.formState.errors.otp.message}</div>
        )}
        <Button
          type='submit'
          className='h-11 w-full cursor-pointer text-base transition-all duration-75 ease-in-out hover:scale-[1.01] active:scale-95'
          disabled={isLoading}
        >
          {isLoading ? 'Đang xác thực...' : 'Xác thực'}
        </Button>
      </form>
    </Form>
  )
}
