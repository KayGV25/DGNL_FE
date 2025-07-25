"use client"

import { Link } from "react-router-dom"
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm"

export default function ResetPasswordPage() {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Mật khẩu mới</h2>
                    </div>
                    <div className="bg-card rounded-lg border shadow-sm p-8">
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
