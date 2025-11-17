import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-l from-primary via-gold-glow to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Aurelion
        </h1>
        <p className="text-xl md:text-3xl text-foreground/90 mb-8 font-bold animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
          آفرینندگان تجربه‌های استثنایی در دنیای گیمینگ
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          ما بازی‌هایی را منتشر می‌کنیم که داستان‌های فراموش‌نشدنی را روایت می‌کنند
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[var(--glow-gold)]"
          >
            بازی‌های ما
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
          >
            درباره ما
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
