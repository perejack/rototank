import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { ShoppingCart, Eye, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "../../roto.png";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="group hover-lift border-0 shadow-card hover:shadow-elegant transition-smooth bg-card overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={productImage}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
        />
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
          {product.capacity}
        </Badge>
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-smooth">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description || "High-quality cylindrical tank perfect for water storage needs."}
        </p>
        
        {/* Features */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.features?.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="flex gap-2 pt-0">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Eye className="w-4 h-4" />
            View Details
          </Button>
        </Link>
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="secondary" size="sm" className="w-full">
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;