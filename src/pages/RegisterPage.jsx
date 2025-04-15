"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    genderId: z.number().int().min(0).max(1),
    yob: z.number().int().min(1900).max(new Date().getFullYear()),
    mob: z.number().int().min(1).max(12),
    dob: z.number().int().min(1).max(31),
    gradeLv: z.number().int().min(1),
    roleId: z.number().int().min(1)
})

export default function RegisterPage() {

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            genderId: 0,
            yob: new Date().getFullYear(),
            mob: 1,
            dob: 1,
            gradeLv: 1,
            roleId: 1
        }
    })

    const onSubmit = (values) => {
        // do something with the form values.
        console.log("Register data:", values);
    };

    return (
        <div className="bg-background flex justify-center min-h-screen items-center">
            <div className="w-full max-w-md sm:max-w-sm border-2 rounded-2xl p-6 sm:p-8 bg-card text-card-foreground dark:bg-card dark:text-card-foreground">
                <h2 className="text-2xl text-center font-bold">Register</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
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
                                <CustomFormItem label="Password">
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
                            name="genderId"
                            render={({ field }) => (
                                <CustomFormItem label="Gender">
                                    <div className="flex gap-4">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="male"
                                                value="0"
                                                checked={field.value === 0}
                                                onChange={() => field.onChange(0)}
                                                className="mr-2"
                                            />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="female"
                                                value="1"
                                                checked={field.value === 1}
                                                onChange={() => field.onChange(1)}
                                                className="mr-2"
                                            />
                                            <label htmlFor="female">Female</label>
                                        </div>
                                    </div>
                                </CustomFormItem>
                            )}
                        />
                        <div className="grid grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="yob"
                                render={({ field }) => (
                                    <CustomFormItem label="Year">
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={e => field.onChange(parseInt(e.target.value))}
                                        />
                                    </CustomFormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="mob"
                                render={({ field }) => (
                                    <CustomFormItem label="Month">
                                        <Input
                                            type="number"
                                            min="1"
                                            max="12"
                                            {...field}
                                            onChange={e => field.onChange(parseInt(e.target.value))}
                                        />
                                    </CustomFormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <CustomFormItem label="Day">
                                        <Input
                                            type="number"
                                            min="1"
                                            max="31"
                                            {...field}
                                            onChange={e => field.onChange(parseInt(e.target.value))}
                                        />
                                    </CustomFormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="gradeLv"
                            render={({ field }) => (
                                <CustomFormItem label="Grade Level">
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={e => field.onChange(parseInt(e.target.value))}
                                    />
                                </CustomFormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="roleId"
                            render={({ field }) => (
                                <CustomFormItem label="Role ID">
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={e => field.onChange(parseInt(e.target.value))}
                                    />
                                </CustomFormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button
                                className="bg-green-500 hover:bg-green-600"
                                type="submit">Register
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}