import { Link, Outlet } from "react-router-dom";
import ProfileBtn from "./ProfileBtn";
import { ModeToggle } from "./ui/mode-toggle";

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
            <div className="w-3/5 flex flex-col justify-between items-left">
                <Link to="/">
                    <p className="nav-text">Home</p>
                </Link>
            </div>
            <div>
                <ModeToggle />
            </div>
            <div>
                <ProfileBtn/>
            </div>
        </nav>
        <Outlet/>
    </>
  );
}