import { Form } from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'
import FormFieldItem from '@/components/FormFieldItem'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../schemas/authSchemas'

export function LoginForm() {
  const { isLoading, onSubmit } = useLogin()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const loginFields = [
    {
      name: 'username',
      label: 'Email hoặc tên người dùng',
      placeholder: 'Email/Username'
    },
    {
      name: 'password',
      label: 'Mật khẩu',
      type: 'password',
      placeholder: 'Password'
    }
  ]

  return (
    <div className='w-full max-w-md space-y-8'>
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-bold tracking-tight'>Đăng Nhập</h2>
      </div>
      <div className='bg-card rounded-lg border p-8 shadow-sm'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {loginFields.map((field) => (
              <FormFieldItem
                control={form.control}
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
              >
                <Input className='h-11' />
              </FormFieldItem>
            ))}
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Input
                  type='checkbox'
                  id='remember'
                  className='h-4 w-4 cursor-pointer rounded border-gray-300'
                />
                <label htmlFor='remember' className='text-muted-foreground text-sm'>
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <Link to='/forgot-password' className='text-primary text-sm hover:underline'>
                Quên mật khẩu?
              </Link>
            </div>
            <div>
              <Button
                type='submit'
                className='h-11 w-full cursor-pointer text-base transition-all duration-75 ease-in-out hover:scale-[1.01] active:scale-95'
                disabled={isLoading}
              >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <p className='text-muted-foreground text-center text-sm'>
        Chưa có tài khoản?{' '}
        <Link to='/register' className='text-primary hover:underline'>
          Đăng ký ngay
        </Link>
      </p>
    </div>
  )
}
