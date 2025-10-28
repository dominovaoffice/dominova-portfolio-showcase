import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dominovaLogo from "@/assets/dominova-logo.png";

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="relative">
            <img 
              src={dominovaLogo} 
              alt="DOMINOVA Logo" 
              className="h-32 md:h-40 w-auto animate-glow"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-primary/50">
            <span className="text-primary font-medium text-sm">MSME Registered IT Startup</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Empowering Students Through</span>
            <br />
            <span className="text-primary">Technology Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Professional workshops, expert-led training, and comprehensive guidance 
            for engineering colleges across India
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 w-full max-w-4xl">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">800+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Major Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Expert Trainers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="group mt-8 text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToEvents}
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
