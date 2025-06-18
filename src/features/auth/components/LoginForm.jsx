import {
    Form,
    FormField,
} from "@/components/ui/form"

import CustomFormItem from "@/components/CustomFormItem"
import { GoogleLogin } from "@react-oauth/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLogin } from "../hooks/useLogin"
import { Link } from "react-router-dom"


export function LoginForm() {
    const { form, isLoading, onSubmit } = useLogin();

    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Đăng Nhập</h2>
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-muted-foreground"
                                >
                                    Ghi nhớ đăng nhập
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-sm text-primary hover:underline"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="w-full h-11 text-base active:scale-95 transition-all ease-in-out duration-75 hover:scale-[1.01] cursor-pointer"
                                disabled={isLoading}
                            >
                                {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
                            </Button>
                            <div className="flex items-center justify-center mt-4">
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
            <p className="text-center text-sm text-muted-foreground">
                Chưa có tài khoản?{" "}
                <Link to="/register" className="text-primary hover:underline">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    )
}