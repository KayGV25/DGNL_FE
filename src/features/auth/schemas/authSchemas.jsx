import { z } from "zod"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,50}$/;
const passwordMessage = 'Mật khẩu phải có 6-50 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt';

export const loginSchema = z.object({
    username: z.string().regex(/^[\w]{3,50}$/, { message: 'Tên người dùng phải có 3-50 ký tự, chỉ gồm chữ, số, gạch dưới' })
        .or(z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { message: 'Email không hợp lệ' })),
    password: z.string().regex(passwordRegex, { message: passwordMessage })
})

export const registerSchema = z.object({
    username: z.string().regex(/^[\w]{3,}$/, { message: 'Tên người dùng phải có ít nhất 3 ký tự, chỉ gồm chữ, số, gạch dưới' }),
    email: z.string().regex(/^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/, { message: 'Email không hợp lệ' }),
    password: z.string().regex(passwordRegex, { message: passwordMessage }),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine(Boolean, { message: 'Bạn phải đồng ý với điều khoản và điều kiện' })
}).refine(data => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
});

export const verifyOtpSchema = z.object({
    otp: z.string().regex(/^\d{4,8}$/, { message: "Mã OTP phải có 4-8 ký tự số" }),
});

export const forgotPasswordSchema = z.object({
    email: z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, { message: "Email không hợp lệ" }),
});

export const resetPasswordSchema = z.object({
    newPassword: z.string().regex(passwordRegex, { message: passwordMessage }),
    confirmPassword: z.string().regex(passwordRegex, { message: passwordMessage }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
});