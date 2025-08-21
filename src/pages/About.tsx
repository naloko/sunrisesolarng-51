import SEO from '../components/SEO';
import HeroSection from '../components/about/sections/HeroSection';
import CompanyOverviewSection from '../components/about/sections/CompanyOverviewSection';
import VisionValuesSection from '../components/about/sections/VisionValuesSection';
import CertificationsStrip from '../components/about/sections/CertificationsStrip';
import StatsSection from '../components/about/sections/StatsSection';

import CtaSection from '../components/about/sections/CtaSection';

const About = () => {
  return (
    <main>
      <SEO 
        title="About Us | Sunrise Solar Solutions - Leading Solar Energy Provider in Nigeria"
        description="Learn about Sunrise's comprehensive solar solutions, expert team, and commitment to sustainable energy across Nigeria. 10+ years of experience, 500+ projects completed."
        canonicalPath="/about"
      />
      <HeroSection />
      <CertificationsStrip />
      <CompanyOverviewSection />
      <VisionValuesSection />
      <StatsSection />
      
      <CtaSection />
    </main>
  );
};

export default About;
