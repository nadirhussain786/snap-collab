import { FeatureSection } from "./components/FeatureSection";
import HeroSnapCollab from "./components/HeroSnapCollab";
import NavbarSnapCollab from "./components/NavbarSnapCollab";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <NavbarSnapCollab />
      <HeroSnapCollab />
      <FeatureSection />
    </main>
  );
}
