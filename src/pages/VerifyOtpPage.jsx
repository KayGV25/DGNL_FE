import { Link } from "react-router-dom";
import VerifyOtpForm from "@/features/auth/components/VerifyOtpForm";

export default function VerifyOtpPage() {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Xác thực OTP</h2>
                        <p className="text-muted-foreground text-base">
                            Nhập mã xác thực gồm 6 chữ số đã gửi đến email/số điện thoại của bạn
                        </p>
                    </div>
                    <div className="bg-card rounded-lg border shadow-sm p-8">
                        <VerifyOtpForm />
                    </div>
                </div>
            </div>
        </div>
    );
} 