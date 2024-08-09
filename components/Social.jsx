import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/code-with-zain-hunzai" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com" },
    { icon: <FaYoutube />, path: "https://youtube.com" },
    { icon: <FaInstagram />, path: "https://instagram.com" },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
