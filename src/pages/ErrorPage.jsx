import { useRouteError, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import ThemeProvider from "@/components/ui/theme-provider"

export default function ErrorPage() {

    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <section className="p-10 h-full bg-background text-foreground">
                <div>
                    <div className="bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnpkcmtsdXBxN3JkYjJ2MHoxNTNqMnJrOGI4aXNheHg0NnU1bXl0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1KQ5Wyuf4jEGW7KEU/giphy.gif)] h-[400px] bg-center w-[70%] bg-no-repeat bg-cover mx-auto mb-1 rounded-2xl">
                        <h1 className="text-center text-[70px]">{error.status}</h1>
                    </div>
                    <h2 className="text-[30px] text-center">Look like you are lost</h2>
                    <p className="text-center">{error.statusText || error.message}</p>
                    <div className="flex justify-center mt-3">
                        <Button
                            onClick={() => navigate(-1)}
                        >Go home
                        </Button>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    )
}