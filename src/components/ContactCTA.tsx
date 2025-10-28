import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Instagram } from "lucide-react";
import dominovaLogo from "@/assets/dominova-logo.png";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo watermark */}
          <div className="flex justify-center mb-8">
            <img src={dominovaLogo} alt="DOMINOVA" className="h-16 opacity-80" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Ready to </span>
            <span className="text-primary">Collaborate?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with DOMINOVA for workshops, guest lectures, hackathon evaluations, and internship guidance
          </p>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <a 
              href="tel:+918754325192"
              className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all group"
            >
              <Phone className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground mb-1">Call Us</span>
              <span className="text-foreground font-medium">+91 87543 25192</span>
            </a>

            <a 
              href="mailto:dominova.office@gmail.com"
              className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all group"
            >
              <Mail className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground mb-1">Email Us</span>
              <span className="text-foreground font-medium text-sm">dominova.office@gmail.com</span>
            </a>

            <a 
              href="https://dominova.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all group"
            >
              <Globe className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground mb-1">Visit Website</span>
              <span className="text-foreground font-medium">dominova.tech</span>
            </a>

            <a 
              href="https://instagram.com/dominova_chennai_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all group"
            >
              <Instagram className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground mb-1">Follow Us</span>
              <span className="text-foreground font-medium">@dominova_chennai_</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.location.href = 'mailto:dominova.office@gmail.com'}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
