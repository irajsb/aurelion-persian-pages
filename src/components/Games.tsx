import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WCImage from "@/assets/WC.jpg";
import FABImage from "@/assets/FAB.jpg";
import CHASEImage from "@/assets/CHASE.jpg";
const Games = () => {
  const games = [
    {
      title: "Wild Cruise",
      genre: "Simulation",
      status: "Pre Publishing  ",
      description: "Aurelion's First Game",
      image: WCImage
    },
    {
      title: "Chase",
      genre: "Arcade",
      status: "In Development",
      description: "60% Done",
       image: CHASEImage
    },
    {
      title: "Fab Plugins ",
      genre: "Third Party",
      status: "Published",
      description: "Over 20+ Fab Plugins Published",
       image: FABImage
    },
  ];

  return (
    <section className="py-24 px-4 relative" id="games">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black mb-4 text-primary">
        بازی‌های ما
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            تجربه های اخیر ما در مارکت بین الملل
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {games.map((game, index) => (
        <Card 
          key={index}
          className="group relative overflow-hidden bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative p-8" dir="ltr">
            <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors">
              <img 
                src={game.image}
                alt="Description of image"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              {game.status}
            </Badge>
            
            <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {game.title}
            </h3>
            
            <p className="text-muted-foreground mb-4">{game.genre}</p>
            
            <p className="text-foreground/80 leading-relaxed">
              {game.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
  );
};

export default Games;
