import { Link, Outlet } from "react-router-dom";
import ProfileBtn from "./ProfileBtn";
import { ModeToggle } from "./ModeToogle";
import { useState } from "react";

export default function NavBar() {
    // TODO: implement checkk login method, if login then show ProfileBtn if not show Login

    return (
        <>
            <nav className="flex justify-between items-center h-15 px-12 bg-background text-foreground">
                <div className="flex justify-between items-center w-fit">
                    <Link to="/">
                        <p className="nav-text">DGNL WEB</p>
                    </Link>
                </div>
                <div className="w-2/5 flex justify-between items-center">
                    <Link to="/">
                        <p className="nav-text">Trang chủ</p>
                    </Link>
                    <div>
                        <Link>
                            Tạo đề thi
                        </Link>
                    </div>
                    <div>
                        <Link>
                            Dịch vụ
                        </Link>
                    </div>
                    <div>
                        <ModeToggle />
                    </div>
                    <div>
                        <ProfileBtn />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}