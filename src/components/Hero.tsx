import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tanks.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Water Storage Tanks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left text-white">
        <div className="max-w-4xl">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Water
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-accent">
              Storage Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">
            High-quality cylindrical tanks from 1,000L to 24,000L. Durable, reliable, 
            and competitively priced for homes, businesses, and industrial applications.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 sm:gap-6 mb-10">
            {[
              { icon: CheckCircle, text: "5-Year Warranty" },
              { icon: Truck, text: "Free Delivery*" },
              { icon: Shield, text: "Food Grade Safe" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg shadow-accent hover-scale"
              >
                View Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-bold px-8 py-4 text-lg backdrop-blur-sm"
            >
              Call 0781515889
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { number: "5000+", label: "Tanks Delivered" },
              { number: "500+", label: "Happy Customers" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;