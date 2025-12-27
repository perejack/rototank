import { useParams, Link } from "react-router-dom";
import { products } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Shield, 
  Truck, 
  CheckCircle,
  Ruler,
  Settings,
  Award
} from "lucide-react";
import productImage from "../../roto.png";
import Header from "@/components/Header";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in the ${product.name} (${product.capacity}) priced at ${formatPrice(product.price)}. Could you provide more details?`
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </Card>
            
            {/* Key Features */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {product.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
                {product.capacity} Capacity
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <Card className="border-0 shadow-card bg-muted/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-muted-foreground">
                    Free delivery within Nairobi area
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Actions */}
            <Card className="border-0 shadow-card gradient-hero text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Order Now - Fast Delivery
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full font-bold"
                    onClick={() => window.open(`https://wa.me/254787429148?text=${whatsappMessage}`, '_blank')}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 font-bold backdrop-blur-sm"
                    onClick={() => window.open('tel:+254787429148')}
                  >
                    <Phone className="w-5 h-5" />
                    Call +254787429148
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-secondary" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Capacity</div>
                    <div className="font-bold text-lg">{product.capacity}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Height</div>
                    <div className="font-bold text-lg">{product.dimensions?.height}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Diameter</div>
                    <div className="font-bold text-lg">{product.dimensions?.diameter}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Material</div>
                    <div className="font-bold text-lg">Food Grade PE</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-secondary" />
                  Perfect For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.applications?.map((app, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {app}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-0 shadow-card text-center p-4">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm">5-Year Warranty</div>
              </Card>
              <Card className="border-0 shadow-card text-center p-4">
                <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm">Free Delivery*</div>
              </Card>
              <Card className="border-0 shadow-card text-center p-4">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm">Quality Assured</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;