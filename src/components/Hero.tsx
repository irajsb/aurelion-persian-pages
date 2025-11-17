import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-12">
        <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-l from-primary via-yellow-400 to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Aurelion
        </h1>
        <p className="text-lg md:text-2xl text-foreground/90 mb-4 font-bold animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
          ناشر بین المللی بازی و اپلیکیشن
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
         
          <Button onClick={() => window.open("https://aurelion.net", "_blank")}
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8"
          >
            درباره ما
          </Button>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;