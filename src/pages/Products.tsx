import { products } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              All Our
              <span className="text-transparent bg-clip-text gradient-secondary ml-3">
                Water Tanks
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete range of high-quality cylindrical tanks from 1,000L to 24,000L capacity. 
              Perfect for residential, commercial, and industrial applications.
            </p>
          </div>

          {/* All Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 p-8 bg-card rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts are here to help you select the perfect tank for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Call +254787429148
              </Button>
              <Button variant="accent" size="lg" className="shadow-accent">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
