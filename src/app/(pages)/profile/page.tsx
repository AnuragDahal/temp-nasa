"use client";
import Image from "next/image";
import ProfileCard from "@/components/Pages/Profile/ProfileCard";
import ProfileReadme from "@/components/Pages/Profile/ProfileReadme";
import AboutCard from "@/components/Pages/Profile/AboutCard";
import ProjectList from "@/components/shared/List/ProjectList";
const page = () => {
  return (
    <div>
      <div className="flex items-center flex-col lg:flex-row justify-center min-h-[80vh] gap-4 p-10">
        <ProfileCard />
        <div className="flex flex-col gap-4">
          <ProfileReadme />
          <AboutCard />
        </div>
      </div>
      <div>
        <ProjectList />
      </div>
    </div>
  );
};
export default page;
