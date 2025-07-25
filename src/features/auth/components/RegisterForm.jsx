import { Form } from "@/components/ui/form"
import FormFieldItem from "@/components/FormFieldItem"
import FormCheckbox from "@/components/FormCheckbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../schemas/authSchemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRegister } from "../hooks/useRegister"

export default function RegisterForm() {
    const { isLoading, onSubmit } = useRegister()

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false
        }
    })

    const registerFields = [
        { name: "username", label: "Tên người dùng", placeholder: "Username" },
        { name: "email", label: "Email", type: "email", placeholder: "Email" },
        { name: "password", label: "Mật khẩu", type: "password", placeholder: "Password" },
        { name: "confirmPassword", label: "Nhập lại mật khẩu", type: "password", placeholder: "Password" }
    ]

    return (
        <div className="bg-card border rounded-lg shadow-sm p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {registerFields.map(field => (
                        <FormFieldItem
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                        >
                            <Input />
                        </FormFieldItem>
                    ))}
                    <FormCheckbox
                        control={form.control}
                        name="acceptTerms"
                        label="Tôi đồng ý đăng ký với điều khoản và điều kiện"
                        id="acceptTerms"
                    />
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
    )
}