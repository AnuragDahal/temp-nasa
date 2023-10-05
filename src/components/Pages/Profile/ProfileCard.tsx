"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";

const ProfileCard = () => {
  // const { userDetails } = useGlobalContext();
  // const { name, username, photoUrl, bio, followers, following } = userDetails;
  const userDetails = {
    uid: "na0U5mkQgNUQh9DSrvOfcGhZLl82",
    name: "jr Tilak",
    photoUrl: "https://avatars.githubusercontent.com/u/106688422?v=4",
    bio: "Tilak Thapa (jrtilak)\r\nCurrently studying Computer Engineering in IOE Purwanchal Campus and passionate about building captivating web apps in reactjs.",
    following: 4,
    followers: 1,
    githubToken: "ghu_3F0wHBgnUm4N1nbnMRxEcdV7OTVrTA2d0CwX",
    email: "iamjrtilak@gmail.com",
    username: "jrTilak",
  };
  const { name, username, photoUrl, bio, followers, following, email } =
    userDetails;
  return (
    <div className="border-black border-2 max-w-[310px] p-4 flex flex-col gap-2">
      <Image
        className="w-56 h-56 rounded-full"
        src={photoUrl}
        alt="Rounded avatar"
        width={500}
        height={500}
      />
      <h1 className="font-semibold text-2xl">{name}</h1>
      <h3 className="font-light">@{username}</h3>
      <p className="max-w-xs">{bio}</p>
      <button
        type="button"
        className="text-gray-900 my-2 w-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
      >
        <span className="mx-auto">Edit Profile</span>
      </button>
      <div>
        <div className="inline-flex items-center gap-1">
          <RiGroupLine className="w-4 h-4" />
          <span>{followers} followers</span>
          <LuDot className="w-4 h-4" />
          <span>{following} following</span>
        </div>
        {email && (
          <div className="inline-flex items-center gap-1">
            <GoMail className="w-4 h-4" />
            <span>{email}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfileCard;
