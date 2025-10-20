import { Target, Eye } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Vision & Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-10 rounded-3xl shadow-soft hover:shadow-medium transition-smooth animate-scale-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in intelligent software solutions, empowering industries worldwide to achieve seamless digital transformation and operational excellence.
              </p>
            </div>

            <div className="bg-card p-10 rounded-3xl shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At gudBro.ai, our mission is to simplify digital transformation and enable industries to innovate with confidence through scalable, intelligent, and customizable software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
