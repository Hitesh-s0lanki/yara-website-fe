import Footer from "./components/footer";
import Hero from "./components/hero";
import MissionSection from "./components/mission-section";
import OurCustomer from "./components/our-customer";
import PartnerSection from "./components/partners-section";
import QuoteSection from "./components/quote-section";
import Team from "./components/team";
import WhyChooseYara from "./components/why-choose-yara";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuoteSection />
      <MissionSection />
      <WhyChooseYara />
      <OurCustomer />
      <Team />
      <PartnerSection />
      <Footer />
    </div>
  );
}
