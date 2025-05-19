"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormField,
} from "@/components/ui/form"

import CustomFormItem from "@/components/CustomFormItem"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
    username: z.string().min(3).max(50),
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
        <div className="bg-background flex justify-center min-h-screen items-center">
            <div className="w-full max-w-md sm:max-w-sm border-2 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl text-center font-bold">Login</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 flex flex-col"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <CustomFormItem label="Username">
                                    <Input placeholder="Username" {...field} />
                                </CustomFormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <CustomFormItem label="Password">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                </CustomFormItem>
                            )}
                        />
                            <Button
                                className="bg-green-500 hover:bg-green-600"
                                type="submit">Submit
                            </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
