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

const resetPasswordSchema = z.object({
    newPassword: z.string().min(6).max(50),
    confirmPassword: z.string().min(6).max(50),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
})


export default function ResetPasswordPage() {
    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
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
                                    name="newPassword"
                                    render={({ field }) => (
                                        <CustomFormItem label="Mật khẩu mới">
                                            <Input
                                                type="password"
                                                placeholder="Nhập mật khẩu mới"
                                                className="h-11"
                                                {...field}
                                            />
                                        </CustomFormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <CustomFormItem label="Xác nhận mật khẩu mới">
                                            <Input
                                                type="password"
                                                placeholder="Xác nhận mật khẩu mới"
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
                                        Đặt lại mật khẩu
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
