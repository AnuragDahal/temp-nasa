//define types for Navbar component
export interface NavLinks {
  name: string;
  href: string;
  linkIcon: JSX.Element;
  tag?: {
    type: "text" | "num";
    content: string | number;
  };
}

export interface SocialIcon {
  type: string;
  href: string;
  icon: JSX.Element;
}

export interface NavLiProps {
  link: NavLinks;
  pathName: string;
}

export interface SocialIcon {
  type: string;
  href: string;
  icon: JSX.Element;
}
