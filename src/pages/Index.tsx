import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import WhatYouGetSection from "@/components/home/WhatYouGetSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <HowWeWorkSection />
      <WhatYouGetSection />
      <PortfolioPreview />
      <CTABanner />
    </Layout>
  );
};

export default Index;
