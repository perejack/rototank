import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Truck, CheckCircle, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All our tanks are made from food-grade materials with UV resistance and come with comprehensive warranties."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Over 5 years of experience in water storage solutions with cutting-edge manufacturing processes."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional installation and customer support team available 24/7 for all your needs."
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary delivery service within Nairobi and surrounding areas for all tank purchases."
    }
  ];

  const stats = [
    { number: "5000+", label: "Tanks Delivered", icon: CheckCircle },
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "5", label: "Years Experience", icon: Award },
    { number: "4.9", label: "Customer Rating", icon: Star }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            About Roto Tank
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kenya's Trusted
            <span className="text-transparent bg-clip-text gradient-secondary ml-3">
              Water Storage Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in providing high-quality, durable water storage solutions 
            for residential, commercial, and industrial applications across Kenya.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;