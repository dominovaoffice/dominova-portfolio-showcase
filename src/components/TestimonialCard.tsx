import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  institution: string;
}

const TestimonialCard = ({ quote, author, role, institution }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-in">
      <Quote className="h-8 w-8 text-primary mb-4" />
      <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="border-t border-primary/20 pt-4">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-primary">{role}</p>
        <p className="text-sm text-muted-foreground">{institution}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
