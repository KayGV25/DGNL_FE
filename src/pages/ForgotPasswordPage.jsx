"use client"

import { Link } from "react-router"
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm"


export default function ForgotPasswordPage() {
    
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex justify-center p-2 mt-6">
                <div className="w-full max-w-md space-y-5">
                    <h2 className="text-3xl font-bold tracking-tight text-center">Quên Mật Khẩu</h2>
                    <div className="bg-card border rounded-lg shadow-sm p-8">
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}