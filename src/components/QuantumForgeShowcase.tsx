import { Building, Calendar, Layers, Users, CheckCircle, Sparkles, Trophy } from "lucide-react";

// Import event images
import quantumForge1 from "@/assets/events/quantum-forge-1.jpg";
import quantumForge2 from "@/assets/events/quantum-forge-2.jpg";
import quantumForge3 from "@/assets/events/quantum-forge-3.jpg";
import quantumForge4 from "@/assets/events/quantum-forge-4.jpg";
import quantumForge5 from "@/assets/events/quantum-forge-5.jpg";

const QuantumForgeShowcase = () => {
  const highlights = [
    "Hackathon-focused morning session covering problem understanding, solution structuring, and execution strategies",
    "Evening session on modern AI tools with hands-on learning and real-time application",
    "Live team-based competition with practical AI usage",
    "Prizes awarded to First, Second, and Third place teams",
    "Led by B. Deepak (Founder), Manikandan (Infosys), and Gauthaman (CTS)",
    "Successfully coordinated with TechLora, with on-ground event management support by Krish and the TechLora team"
  ];

  const stats = [
    { icon: Building, value: "1", label: "Institution" },
    { icon: Calendar, value: "1", label: "Full-Day Event" },
    { icon: Layers, value: "2", label: "Core Sessions" },
    { icon: Users, value: "3", label: "Industry Trainers" }
  ];

  const images = [quantumForge1, quantumForge2, quantumForge3, quantumForge4, quantumForge5];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Hackathon & AI Workshop at Sathyabama Institute of Science and Technology
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              QUANTUM FORGE
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
            A high-impact technical event conducted at Sathyabama Institute of Science and Technology, combining hackathon strategy training and hands-on AI tool exposure. The event focused on building real-world problem-solving skills, innovation mindset, and practical AI applications through guided sessions and live competition.
          </p>

          {/* Key Highlights */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Key Highlights</h3>
            </div>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Section */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold text-foreground mb-3">Impact & Engagement</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The event delivered strong student engagement, practical exposure, and competitive learning, creating a meaningful industry-aligned experience for participants.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: "500ms" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Event Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Quantum Forge Event ${index + 1}`}
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumForgeShowcase;
