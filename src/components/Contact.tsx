import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, MessageCircle, Mail, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+254787429148",
      description: "Available 24/7 for orders and inquiries",
      href: "tel:+254787429148"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+254787429148",
      description: "Quick response via WhatsApp",
      href: "https://wa.me/254787429148"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rototank.co.ke",
      description: "Send us detailed inquiries",
      href: "mailto:info@rototank.co.ke"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      description: "Free delivery within Nairobi area",
      href: "#"
    }
  ];

  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your water storage tanks. Could you please provide more information?");

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Order Your
            <span className="text-transparent bg-clip-text gradient-secondary ml-3">
              Water Tank?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for expert advice, custom quotes, and fast delivery. 
            Our team is ready to help you find the perfect water storage solution.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="pb-3">
                <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-secondary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-bold text-primary mb-2">{item.content}</div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => item.href !== "#" && window.open(item.href, '_blank')}
                >
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="border-0 shadow-elegant gradient-hero text-white overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPg==')] bg-repeat"></div>
            </div>

            <div className="relative z-10">
              <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-3xl font-bold mb-4">
                Get Your Custom Quote Today
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Need a specific size or have special requirements? Our experts will help you 
                choose the perfect tank and provide competitive pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg"
                  className="font-bold"
                  onClick={() => window.open(`https://wa.me/254787429148?text=${whatsappMessage}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-bold backdrop-blur-sm"
                  onClick={() => window.open('tel:+254787429148')}
                >
                  <Phone className="w-5 h-5" />
                  Call +254787429148
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <div className="mt-12 text-center">
          <Card className="inline-flex items-center gap-3 p-4 border-0 shadow-card">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-medium text-foreground">
              Business Hours: Monday - Saturday 8:00 AM - 6:00 PM
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;