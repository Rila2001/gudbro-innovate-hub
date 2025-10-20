import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Flagship Product Company of IAT Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Industries Through{" "}
            <span className="text-gradient">Intelligent Software Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            GUDBRO delivers scalable, future-ready software products that simplify digital transformation across healthcare, manufacturing, education, and enterprise management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 shadow-medium hover:shadow-strong transition-smooth group">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
