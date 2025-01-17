// "use client";
// import { useEffect, useState } from "react";

// const Nav = () => {
//   const Links = [
//     { name: "home", path: "home" },
//     { name: "services", path: "services" },
//     { name: "resume", path: "resume" },
//     { name: "work", path: "work" },
//     { name: "contact", path: "contact" },
//   ];

//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 150; 
//       Links.forEach(({ path }) => {
//         const section = document.getElementById(path);
//         if (
//           section &&
//           section.offsetTop <= scrollPosition &&
//           section.offsetTop + section.offsetHeight > scrollPosition
//         ) {
//           setActiveSection(path);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 w-full bg-black/90 text-white py-4 shadow-md z-50">
//       <div className="container mx-auto flex justify-center gap-8">
//         {Links.map((link, index) => (
//           <a
//             key={index}
//             href={`#${link.path}`}
//             className={`capitalize font-medium transition-all hover:text-accent-DEFAULT ${
//               activeSection === link.path
//                 ? "text-accent-DEFAULT border-b-2 border-accent-DEFAULT"
//                 : ""
//             }`}
//           >
//             {link.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Nav;
