"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router"

import {
    Form,
    FormField,
} from "@/components/ui/form"

import CustomFormItem from "@/components/CustomFormItem"

import { FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const registerSchema = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)

})

export default function RegisterPage() {

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const onSubmit = (values) => {
        // do something with the form values.
        console.log("Register data:", values);
    };

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-2">
                <div className="w-full max-w-md space-y-5">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Đăng Ký</h2>
                    </div>
                    <div className="bg-card border rounded-lg shadow-sm p-8">
                        <div className="">
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <CustomFormItem label="Tên người dùng">
                                                <Input placeholder="Username" {...field} />
                                            </CustomFormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <CustomFormItem label="Email">
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </CustomFormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <CustomFormItem label="Mật khẩu">
                                                <Input
                                                    type="password"
                                                    placeholder="Password"
                                                    {...field}
                                                />
                                            </CustomFormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <CustomFormItem label="Nhập lại mật khẩu">
                                                <Input
                                                    type="password"
                                                    placeholder="Password"
                                                    {...field}
                                                />
                                            </CustomFormItem>
                                        )}
                                    >

                                    </FormField>

                                    <div className="flex items-start space-x-2">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="mt-1 h-4 w-4 rounded border-gray-300 cursor-pointer"
                                        />
                                        <label htmlFor="remember" className="text-sm text-muted-foreground leading-snug">
                                            <p>Tôi đồng ý đăng ký với điều khoản và điều kiện</p>
                                            <p className="text-blue-500 underline cursor-pointer">
                                                Đọc điều khoản sử dụng của người dùng
                                            </p>
                                        </label>
                                    </div>


                                    <div className="flex justify-center">
                                        <Button
                                            type="submit"
                                            className="w-full h-11 text-base"
                                        >
                                            Đăng Ký
                                        </Button>
                                    </div>

                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}