import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Vazirmatn', sans-serif" }}>
      <Hero />
      <About />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
