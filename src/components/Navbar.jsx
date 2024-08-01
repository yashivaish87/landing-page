import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleClick = (e, href) => {
        e.preventDefault(); // Prevents default anchor behavior
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const createButton = "py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800";
    const signButton = "py-2 px-3 border rounded-md";

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex item-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 cursor-pointer" src={logo} alt="logo" onClick={(e) => handleClick(e, "#")} />
                        <span className="text-xl tracking-tight">DevR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className={signButton}> Sign In </a>
                        <a href="#" className={createButton}> Create an Account </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden"
                    style={{ background: "linear-gradient(to right, #EDC9AF, #F4A460, #BC8F8F)" }}>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className={signButton}> Sign In </a>
                            <a href="#" className={createButton}> Create an Account </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;