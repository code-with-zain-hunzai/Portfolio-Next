"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const Links = [
        { name: "home", path: "/" },
        { name: "services", path: "/services" },
        { name: "resume", path: "/resume" },
        { name: "work", path: "/work" },
        { name: "contact", path: "/contact" },
    ];
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium transition-all hover:text-accent-DEAULT ${
                        link.path === pathname ? "text-accent-DEAULT border-b-2 border-b-accent-DEAULT" : ""
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
