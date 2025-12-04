import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <ProductsGrid />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">R</span>
                </div>
                <span className="font-bold text-xl">Roto Tank</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Kenya's trusted provider of premium water storage solutions. 
                Quality tanks for residential, commercial, and industrial use.
              </p>
              <div className="text-primary-foreground/60 text-sm">
                © 2024 Roto Tank. All rights reserved.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#products" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Products
                </a>
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </a>
                <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="text-primary-foreground/80">
                  <strong>Phone:</strong> +254787429148
                </div>
                <div className="text-primary-foreground/80">
                  <strong>Location:</strong> Nairobi, Kenya
                </div>
                <div className="text-primary-foreground/80">
                  <strong>Hours:</strong> Mon-Sat 8AM-6PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
