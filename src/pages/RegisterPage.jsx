"use client"

import { Link } from "react-router"
import RegisterForm from "@/features/auth/components/RegisterForm"
export default function RegisterPage() {

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-2">
                <div className="w-full max-w-md space-y-5">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Đăng Ký</h2>
                    </div>
                   <RegisterForm/>
                </div>
            </div>

        </div>
    )
}