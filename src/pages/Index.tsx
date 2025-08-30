import Hero from "@/components/Hero";
import CareTools from "@/components/CareTools";
import SpeciesGuides from "@/components/SpeciesGuides";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CareTools />
      <SpeciesGuides />
      <Footer />
    </main>
  );
};

export default Index;
