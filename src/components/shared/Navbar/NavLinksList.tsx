//add all nav links here

import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsFillChatLeftFill, BsPlusCircleFill } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { LuSearchCode } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaDiagramProject } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";
import { NavLinks } from "./@types";

// classname for link icon
const linkIconClassName: String =
  "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";

//add all nav links here
export const navLinks: NavLinks[] = [
  {
    name: "Home",
    href: "/",
    linkIcon: <AiFillHome className={linkIconClassName} />,
  },
  {
    name:"Inbox",
    href:"/inbox",
    linkIcon:  <BsFillChatLeftFill className={linkIconClassName} />
  },
  {
    name: "Explore",
    href: "/explore",
    linkIcon: <DiCodeigniter className={linkIconClassName} />,
    tag: {
      type: "text",
      content: "new",
    },
  },
  {
    name: "Projects",
    href: "/projects",
    linkIcon: <FaDiagramProject className={linkIconClassName} />,
    tag: {
      type: "text",
      content: "9+",
    },
  },
  {
    name: "Search",
    href: "/search",
    linkIcon: <LuSearchCode className={linkIconClassName} />,
  },
  {
    name: "Create",
    href: "/projects/create",
    linkIcon: <BsPlusCircleFill className={linkIconClassName} />,
  },
  {
    name: "Profile",
    href: "/profile",
    linkIcon: <CgProfile className={linkIconClassName} />,
  },
  {
    name: "Links",
    href: "/links",
    linkIcon: <TbExternalLink className={linkIconClassName} />,
  },
  {
    name: "Contact",
    href: "/#contact",
    linkIcon: <BiSolidMessageSquareDetail className={linkIconClassName} />,
  },
];
