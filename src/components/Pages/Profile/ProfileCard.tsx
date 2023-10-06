"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";
import Link from "next/link";
import placeholderPhoto from "/public/assets/img/placeholder.jpg";

const ProfileCard = () => {
  const { userDetails } = useGlobalContext();
  const { name, username, photoUrl, bio, followers, following, email, skills } =
    userDetails;
  return (
    <div className=" max-w-[310px] p-4 flex flex-col gap-2">
      <Image
        className="w-56 h-56 rounded-full"
        src={photoUrl || placeholderPhoto}
        alt="Rounded avatar"
        width={500}
        height={500}
      />
      <h1 className="font-semibold text-2xl">{name || "Your Name"}</h1>
      <h3 className="font-light">@{username || "username"}</h3>
      <p className="max-w-xs">{bio}</p>
      <Link
        href="/login/detailsForm"
        className="text-gray-900 my-2 w-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
      >
        <span className="mx-auto">Edit Profile</span>
      </Link>
      <div>
        <div className="inline-flex items-center gap-1">
          <RiGroupLine className="w-4 h-4" />
          <span>{followers || 0} followers</span>
          <LuDot className="w-4 h-4" />
          <span>{following || 0} following</span>
        </div>
        {email && (
          <div className="inline-flex items-center gap-1">
            <GoMail className="w-4 h-4" />
            <span>{email}</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap">
      <h1 className="font-bold">Skills:&nbsp; </h1>
        {skills &&
          skills.map((skill, index) => {
            if (index < skills.length - 1) {
              return <span> {skill.value},&nbsp; </span>;
            } else {
              return <span>{skill.value} </span>;
            }
          })}
      </div>
    </div>
  );
};
export default ProfileCard;
