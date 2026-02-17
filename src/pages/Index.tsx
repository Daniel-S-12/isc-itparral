import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CareersSection from "@/components/CareersSection";
import ConnectSection from "@/components/ConnectSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
