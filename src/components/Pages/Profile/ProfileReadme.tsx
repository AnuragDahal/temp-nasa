"use client";
import { useGlobalContext } from "@/app/GlobalContext";

const ProfileReadme = ({ username }) => {
  return (
    <div>
      <div className="text-sm font-extralight font-mono">
        {username}/PROFILE.md
      </div>
      <div className="grid grid-cols-2 grid-rows-2">
        <img
          className="h-96 col-span-2"
          src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=buefy`}
          alt=""
        />
        <img
          className="h-96"
          src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=buefy`}
          alt=""
        />
        <img
          className="h-96"
          src={`http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=buefy`}
          alt=""
        />
      </div>
    </div>
  );
};
export default ProfileReadme;
