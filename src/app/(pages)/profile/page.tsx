"use client";
import Image from "next/image";
import ProfileCard from "@/components/Pages/Profile/ProfileCard";
import ProfileReadme from "@/components/Pages/Profile/ProfileReadme";
const page = () => {
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
  return (
    <div className="flex items-center justify-center min-h-screen gap-4 p-10">
      <ProfileCard />
      <ProfileReadme username={userDetails.username} />
    </div>
  );
};
export default page;
