"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"; 

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent-DEAULT" />
            </SheetTrigger>
            <SheetContent>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1>zain <span className="text-accent-DEAFULT">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center text-center items-center gap-10">
                    <ul className="space-y-5">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className={`text-2xl transition-all  capitalize  ${pathname === link.path ? 'border-b-2 border-b-accent-DEAULT text-accent-DEAFULT' : ''}`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
