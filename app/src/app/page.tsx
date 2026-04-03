import { HeroSection } from "@/components/sections/HeroSection";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectCards } from "@/components/sections/ProjectCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <ProjectCards />
    </>
  );
}
