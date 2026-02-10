import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Phone Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-center items-center gap-2 text-sm font-medium">
          <Phone className="w-4 h-4" />
          <span>Call us: +254739588226</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-xl text-foreground">Roto Tank</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Contact */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+254739588226"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+254739588226</span>
              </a>
              <Button variant="secondary" size="sm" className="glow-on-hover">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border shadow-elegant">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+254739588226"
                  className="flex items-center gap-2 text-sm mb-4"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+254739588226</span>
                </a>
                <Button variant="secondary" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;