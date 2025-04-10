"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormDescription,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

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
        console.log("Login data:", values);
    };

    return (
        <div className="bg-background flex justify-center min-h-screen items-center">
            <div className="w-full max-w-md sm:max-w-sm border-2 rounded-2xl p-6 sm:p-8 bg-foreground text-background">
                <h2 className="text-2xl text-center font-bold">Login</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button
                                className="bg-green-500 hover:bg-green-600"
                                type="submit">Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
