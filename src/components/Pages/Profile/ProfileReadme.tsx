"use client";
import { useGlobalContext } from "@/app/GlobalContext";

const ProfileReadme = () => {
  const { userDetails } = useGlobalContext();
  const { username } = userDetails;
  return (
    <div className="border-2 p-4 rounded-lg min-w-[50%] min-h-[10vh]">
      <div className="text-sm font-extralight font-mono">
        {username || "username"}/PROFILE.md
      </div>
      <hr />
      {username ? (
        <div className="grid grid-cols-2 grid-rows-2">
          <img
            className="w-full col-span-2"
            src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=buefy`}
            alt=""
          />
          <img
            className="w-full"
            src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=buefy`}
            alt=""
          />
          <img
            className="w-full"
            src={`http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=buefy`}
            alt=""
          />
        </div>
      ) : (
        <div className="flex justify-center mx-auto mt-10">
          <span>Login with github to see github stats..</span>
        </div>
      )}
    </div>
  );
};
export default ProfileReadme;
