import Contact from "@/components/Pages/Home/Contact";
import Hero from "@/components/Pages/Home/Hero";
import HowToContribute from "@/components/Pages/Home/HowToContribute";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import ProjectList from "@/components/shared/List/ProjectList";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ProjectList />
      <HowToContribute />
      <Contact />
    </main>
  );
}
