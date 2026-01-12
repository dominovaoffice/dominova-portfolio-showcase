import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  images: string[];
  stats?: { label: string; value: string }[];
  imageStyles?: { [key: number]: string };
}

const EventCard = ({ title, subtitle, description, highlights, images, stats, imageStyles }: EventCardProps) => {
  return (
    <Card className="overflow-hidden border-primary/20 bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Content */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/30">
              {subtitle}
            </Badge>
            <h3 className="text-3xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">Key Highlights</h4>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats if available */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-3">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-2 h-64' : 'h-40'
              } group`}
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageStyles?.[index] || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
