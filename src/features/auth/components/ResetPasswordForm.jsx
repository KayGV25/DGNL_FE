import { Form } from "@/components/ui/form";
import FormFieldItem from "@/components/FormFieldItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassword } from "../hooks/useResetPassword";
import { resetPasswordSchema } from "../schemas/authSchemas";

export default function ResetPasswordForm() {
    const { onSubmit, isLoading } = useResetPassword();

    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormFieldItem
                    control={form.control}
                    name="newPassword"
                    label="Mật khẩu mới"
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                >
                    <Input className="h-11" />
                </FormFieldItem>
                <FormFieldItem
                    control={form.control}
                    name="confirmPassword"
                    label="Xác nhận mật khẩu mới"
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                >
                    <Input className="h-11" />
                </FormFieldItem>
                <Button
                    type="submit"
                    className="w-full h-11 text-base active:scale-95 transition-all ease-in-out duration-75 hover:scale-[1.01] cursor-pointer"
                    disabled={isLoading}
                >
                    {isLoading ? "Đang đặt lại..." : "Đặt lại mật khẩu"}
                </Button>
            </form>
        </Form>
    );
}
