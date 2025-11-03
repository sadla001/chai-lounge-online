import { Button } from "@/components/ui/button";
import heroImage from "@/assets/chai-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Authentic Chai Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Handcrafted with love using traditional recipes and premium spices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
            Explore Our Menu
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-2">
            Visit Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
