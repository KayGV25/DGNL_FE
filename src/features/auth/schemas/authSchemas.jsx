import { z } from 'zod'

const usernameRegex = /^[\w]{3,50}$/
const usernameMessage = 'Tên người dùng phải có 3-50 ký tự, chỉ gồm chữ, số, gạch dưới'

const emailRegex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailMessage = 'Email không hợp lệ'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,50}$/
const passwordMessage = 'Mật khẩu phải có 6-50 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt'

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Tên đăng nhập không được để trống' })
    .refine(
      (value) => {
        return usernameRegex.test(value) || emailRegex.test(value)
      },
      {
        message:
          'Vui lòng nhập tên người dùng hợp lệ (3-50 ký tự, chỉ gồm chữ, số, gạch dưới) hoặc email hợp lệ'
      }
    ),
  password: z
    .string()
    .min(1, { message: 'Mật khẩu không được để trống' })
    .regex(passwordRegex, { message: passwordMessage })
})

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: 'Tên người dùng không được để trống' })
      .regex(usernameRegex, { message: usernameMessage }),
    email: z
      .string()
      .min(1, { message: 'Email không được để trống' })
      .regex(emailRegex, { message: emailMessage }),
    password: z
      .string()
      .min(1, { message: 'Mật khẩu không được để trống' })
      .regex(passwordRegex, { message: passwordMessage }),
    confirmPassword: z.string().min(1, { message: 'Xác nhận mật khẩu không được để trống' }),
    acceptTerms: z
      .boolean()
      .refine(Boolean, { message: 'Bạn phải đồng ý với điều khoản và điều kiện' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword']
  })

export const verifyOtpSchema = z.object({
  otp: z
    .string()
    .min(1, { message: 'Mã OTP không được để trống' })
    .regex(/^\d{6}$/, { message: 'Mã OTP phải có đúng 6 ký tự số' })
})

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email không được để trống' })
    .regex(emailRegex, { message: emailMessage })
})

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, { message: 'Mật khẩu mới không được để trống' })
      .regex(passwordRegex, { message: passwordMessage }),
    confirmPassword: z.string().min(1, { message: 'Xác nhận mật khẩu không được để trống' })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword']
  })
