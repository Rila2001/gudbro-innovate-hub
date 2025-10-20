import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-95" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Transform Your Business Digitally?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join leading organizations who trust GUDBRO to power their digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 shadow-medium hover:shadow-strong transition-smooth group">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
