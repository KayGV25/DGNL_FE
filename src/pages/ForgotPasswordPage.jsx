"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router"
import { useNavigate } from "react-router"

import {
    Form,
    FormField,
} from "@/components/ui/form"

import CustomFormItem from "@/components/CustomFormItem"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const forgotPasswordSchema = z.object({
    email: z.string().email()
})

export default function ForgotPasswordPage() {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = () => {

    }

    const handleCancel = () => {
        navigate("/login");
    }

    const handleConfirm = () => {
        navigate("/reset-password");
    }

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex justify-center p-2 mt-6">
                <div className="w-full max-w-md space-y-5">
                    <h2 className="text-3xl font-bold tracking-tight text-center">Quên Mật Khẩu</h2>
                    <div className="bg-card border rounded-lg shadow-sm p-8">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <CustomFormItem label="Nhập email của bạn">
                                            <Input placeholder="Email" {...field} />
                                        </CustomFormItem>
                                    )}
                                />
                                <div className="flex justify-center gap-x-8 ">
                                    <Button
                                        className="bg-background text-foreground cursor-pointer hover:scale-[1.01] text-base active:scale-95 transition-all ease-in-out duration-75"
                                        onClick={() => handleCancel()}
                                    >
                                        Hủy
                                    </Button>
                                    <Button
                                        className=" cursor-pointer hover:scale-[1.01] text-base active:scale-95 transition-all ease-in-out duration-75"
                                        type="submit"
                                        onClick={() => handleConfirm()}
                                    >
                                        Xác Nhận
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