"use client";
import { useGlobalContext } from "@/app/GlobalContext";

const AboutCard = () => {
  const { userDetails } = useGlobalContext();
  const { username } = userDetails;
  return (
    <div className="border-2 p-4 rounded-lg max-w-[46rem]">
      <div className="text-sm font-extralight font-mono">
        {username || "username"}/ABOUT.md
      </div>
      <hr />
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis iste nisi tempore suscipit earum laudantium consequuntur rerum laboriosam iusto? Ducimus assumenda aperiam debitis magni sed ab, dolore quos deleniti officia placeat fugiat aliquam inventore minus iusto quae itaque magnam obcaecati totam. Quisquam porro ipsum ut dolores debitis enim praesentium voluptates nesciunt repudiandae tempore blanditiis voluptatibus earum quod iusto ex, voluptas laudantium ab quae veniam dolorem animi? Quo, vel exercitationem. Animi placeat consequatur beatae sed optio possimus eaque hic adipisci unde in. Fugiat illum laudantium accusamus repellat, nam dignissimos neque similique. Consequatur minima labore, quo voluptatibus assumenda eius odit provident!
      </div>
    </div>
  );
};
export default AboutCard;
