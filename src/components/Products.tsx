import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart3, 
  GraduationCap, 
  Boxes, 
  Stethoscope, 
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Products = () => {
  const readyProducts = [
    {
      icon: Users,
      name: "gudBro CRM",
      tagline: "Customer Relationship Management Simplified",
      description: "A smart CRM platform that helps manage leads, nurture relationships, and drive sales with automation and analytics.",
      features: [
        "Centralized lead database",
        "Automated follow-ups and notifications",
        "Sales dashboards",
        "Integrated communication tools",
        "Cloud access for remote teams"
      ]
    }
  ];

  const customizableProducts = [
    {
      icon: BarChart3,
      name: "gudBro MIS",
      tagline: "Management Information System",
      description: "A unified data platform for real-time performance tracking and KPI monitoring.",
      features: [
        "Centralized data visualization",
        "Departmental automation",
        "ERP/CRM integration",
        "Role-based dashboards"
      ]
    },
    {
      icon: GraduationCap,
      name: "gudBro LMS",
      tagline: "Learning Management & Student Portal",
      description: "A digital education ecosystem for universities and training institutes.",
      features: [
        "Online course and exam management",
        "Student/faculty dashboards",
        "Live classes and AI analytics"
      ]
    },
    {
      icon: Boxes,
      name: "gudBro MERP",
      tagline: "Modular Entrepreneurship Resource Planner",
      description: "A flexible ERP system for startups and growing enterprises.",
      features: [
        "Modular business design",
        "BI dashboards",
        "API integrations",
        "Cloud scalability"
      ]
    },
    {
      icon: Stethoscope,
      name: "gudBro MDMIS",
      tagline: "Medical Device Management Information System",
      description: "Quality Management software for ISO 13485 compliance.",
      features: [
        "CAPA tracking",
        "Device traceability",
        "Audit management",
        "Risk management workflows"
      ]
    },
    {
      icon: Brain,
      name: "gudBro Radiology",
      tagline: "AI-Based Predictive Imaging System",
      description: "AI-powered diagnostic support for radiologists.",
      features: [
        "AI anomaly detection",
        "PACS/HIS integration",
        "Automated reporting",
        "HIPAA compliance"
      ]
    }
  ];

  return (
    <section className="py-24" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Product Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ready-to-deploy solutions to fully customizable platforms, we have the tools to transform your business.
          </p>
        </div>

        {/* Products On-Shelf */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <h3 className="text-3xl font-bold">Products On-Shelf</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              <Sparkles className="w-3 h-3" />
              Ready for Sale
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {readyProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-card p-8 md:p-10 rounded-3xl shadow-soft hover:shadow-medium transition-smooth border border-border animate-scale-in"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-lg text-primary mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold mb-3">Key Features:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customizable Products */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <h3 className="text-3xl font-bold">Customizable Products</h3>
          </div>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Our customizable solutions empower industries to tailor technology to their exact business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customizableProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-medium transition-smooth border border-border group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                <p className="text-primary mb-4">{product.tagline}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <p className="font-semibold mb-3 text-sm">Key Features:</p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
