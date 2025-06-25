import CustomFormItem from "@/components/CustomFormItem"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormField,
} from "@/components/ui/form"
import { useRegister } from "../hooks/useRegister"

export default function RegisterForm() {
    const { form, onSubmit, isLoading } = useRegister()

    return (
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
                        />


                        <div className="flex items-start space-x-2">
                            <FormField
                                control={form.control}
                                name="acceptTerms"
                                render={({ field }) => (
                                    <CustomFormItem className="m-0 p-0">
                                        <div className="flex items-start space-x-2">
                                            <input
                                                type="checkbox"
                                                id="acceptTerms"
                                                className="mt-1 h-4 w-4 rounded border-gray-300 cursor-pointer"
                                                checked={field.value}
                                                onChange={e => field.onChange(e.target.checked)}
                                                ref={field.ref}
                                            />
                                            <label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-snug">
                                                <p>Tôi đồng ý đăng ký với điều khoản và điều kiện</p>
                                                <p className="text-blue-500 underline cursor-pointer">
                                                    Đọc điều khoản sử dụng của người dùng
                                                </p>
                                            </label>
                                        </div>
                                    </CustomFormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="w-full h-11 text-base active:scale-95 transition-all ease-in-out duration-75 hover:scale-[1.01] cursor-pointer"
                                disabled={isLoading}
                            >
                                {isLoading ? "Đang đăng ký..." : "Đăng Ký"}
                            </Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}