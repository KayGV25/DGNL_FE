"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import {
    Form,
    FormField,
} from "@/components/ui/form"

import CustomFormItem from "@/components/CustomFormItem"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
    username: z.string().min(3).max(50).or(z.string().email()),
    password: z.string().min(6),
})


export default function LoginPage() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    const onSubmit = (values) => {
        // do something with the form values.

    };

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Mật khẩu mới</h2>
                    </div>
                    <div className="bg-card rounded-lg border shadow-sm p-8">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <CustomFormItem label="Email hoặc tên người dùng">
                                            <Input
                                                placeholder="Email/Username"
                                                className="h-11"
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
                                                className="h-11"
                                                {...field}
                                            />
                                        </CustomFormItem>
                                    )}
                                />
                                <div>
                                    <Button
                                        type="submit"
                                        className="w-full h-11 text-base active:scale-95 transition-all ease-in-out duration-75 hover:scale-[1.01] cursor-pointer"
                                    >
                                        Đăng Nhập
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
