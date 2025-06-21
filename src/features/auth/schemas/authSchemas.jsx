import { z } from "zod"

export const loginSchema = z.object({
    username: z.string().min(3).max(50).or(z.string().email()),
    password: z.string().min(6)
})

export const registerSchema = z.object({
    username: z.string().min(3, {
        message: 'Tên người dùng phải có ít nhất 3 ký tự'
    }),
    email: z.string().email({
        message: 'Email không hợp lệ'
    }),
    password: z.string().min(6, {
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
    }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
});