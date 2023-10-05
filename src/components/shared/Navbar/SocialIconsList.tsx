//add all social icons here

import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub, FaRedditAlien } from "react-icons/fa";
import { SocialIcon } from "./@types";
import { PiInstagramLogoFill } from "react-icons/pi";

//classname for social icon
const socialIconStyle = "w-5 h-5 rounded cursor-pointer";

export const socialIcons: SocialIcon[] = [
  {
    type: "insta",
    href: "https://www.instagram.com/iamjrtilak/",
    icon: <PiInstagramLogoFill className={socialIconStyle} />,
  },
  {
    type: "github",
    href: "https://github.com/jrtilak",
    icon: <FaGithub className={socialIconStyle} />,
  },
  {
    type: "linkedin",
    href: "https://np.linkedin.com/in/jrtilak",
    icon: <GrLinkedinOption className={socialIconStyle} />,
  },
  {
    type: "reddit",
    href: "https://np.linkedin.com/in/jrtilak",
    icon: <FaRedditAlien className={socialIconStyle} />,
  },
];