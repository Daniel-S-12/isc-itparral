import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CareersSection from "@/components/CareersSection";
import ConnectSection from "@/components/ConnectSection";
import CTASection from "@/components/CTASection";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeSwitcher />
      <HeroSection />
      <BenefitsSection />
      <ProjectsSection />
      <CareersSection />
      <ConnectSection />
      <CTASection />
    </div>
  );
};

export default Index;
