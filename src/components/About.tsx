import { Building2, Lightbulb, Rocket, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that push industry boundaries"
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "Built to grow with your business, from startup to enterprise"
    },
    {
      icon: Building2,
      title: "Customization",
      description: "Tailored solutions that fit your unique business requirements"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Secure, reliable, and compliant with industry standards"
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">GUDBRO</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GUDBRO is the flagship product company of <strong>IAT Solutions</strong>, the Software Development Division of IAT Technologies. 
            We build intelligent, scalable, and future-ready software products that help businesses across industries simplify digital transformation.
          </p>
          <div className="mt-8 inline-block">
            <div className="text-2xl font-semibold text-primary">
              "Innovation Meets Practicality"
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
