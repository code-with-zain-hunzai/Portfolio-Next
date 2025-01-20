import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/code-with-zain-hunzai" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/zain-ul-abbdin-979b2b286/" },
    { icon: <FaUpwork />, path: "https://www.upwork.com/freelancers/~015ed0ad740eb17a30" },
    { icon: <TbBrandFiverr />, path: "https://www.fiverr.com/sellers/zainulabbdin20/edit" },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
