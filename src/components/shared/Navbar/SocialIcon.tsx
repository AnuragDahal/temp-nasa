// social icon component
import Link from "next/link";
import { SocialIcon } from "./@types";

const SocialIcon: React.FC<SocialIcon> = ({ icon, href }) => {
  return (
    <>
      <Link href={href}>{icon}</Link>
    </>
  );
};

export default SocialIcon;