"use client"

import { Link } from "react-router-dom"
import { LoginForm } from "@/features/auth/components/LoginForm"

export default function LoginPage() {

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <div className="flex items-center p-6 border-b">
                <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
                <LoginForm/>
            </div>
        </div>
    )
}
