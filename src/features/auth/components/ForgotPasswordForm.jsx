import { Form } from "@/components/ui/form";
import FormFieldItem from "@/components/FormFieldItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../schemas/authSchemas";



export default function ForgotPasswordForm() {
    const { isLoading, onSubmit} = useForgotPassword();

    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormFieldItem
                    control={form.control}
                    name="email"
                    label="Nhập email của bạn"
                    type="email"
                    placeholder="Email"
                >
                    <Input />
                </FormFieldItem>
                <Button
                    type="submit"
                    className="w-full h-11 cursor-pointer"
                    disabled={isLoading}
                >
                    {isLoading ? "Đang gửi..." : "Xác nhận"}
                </Button>
            </form>
        </Form>
    );
}
