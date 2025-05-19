import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        window.onscroll = () =>
            setIsTop((window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) <= 50)
        return () => (window.onscroll = null);
    })


    return (
        <>
            <div id="top" className="invisible"></div>
            <NavBar />
            <a href="#top" className={`fixed bottom-7 right-4 size-10 rounded-lg border-2 dark:border-gray-50 border-gray-900 grid place-items-center cursor-pointer 
            ${isTop ? "hidden" : "block"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </a>
        </>
    )
}