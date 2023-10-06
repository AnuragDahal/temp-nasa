"use client";
import { useGlobalContext } from "@/app/GlobalContext";

const AboutCard = () => {
  const { userDetails } = useGlobalContext();
  const { username } = userDetails;
  return (
    <div className="min-h-[10vh] border-2 p-4 rounded-lg max-w-[46rem]">
      <div className="text-sm font-extralight font-mono">
        {username || "username"}/ABOUT.md
      </div>
      <hr />
      <div className="mt-4">
      {userDetails.about || "Nothing to show here, yet!"}

      </div>
    </div>
  );
};
export default AboutCard;
