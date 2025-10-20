import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import VisionMission from "@/components/VisionMission";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <VisionMission />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
