export interface Product {
  id: number;
  name: string;
  capacity: string;
  price: number;
  image: string;
  description?: string;
  features?: string[];
  dimensions?: {
    height: string;
    diameter: string;
  };
  applications?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "1,000L Cylindrical Tank",
    capacity: "1,000L",
    price: 8500,
    image: "/src/assets/product-tank.jpg",
    description: "Perfect for small households and residential use. Compact design that fits in tight spaces.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.2m", diameter: "1.0m" },
    applications: ["Residential", "Small Office", "Backup Water"]
  },
  {
    id: 2,
    name: "2,000L Cylindrical Tank",
    capacity: "2,000L", 
    price: 14500,
    image: "/src/assets/product-tank.jpg",
    description: "Ideal for medium-sized families and small commercial establishments.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.5m", diameter: "1.2m" },
    applications: ["Family Home", "Small Business", "Restaurant"]
  },
  {
    id: 3,
    name: "2,500L Cylindrical Tank",
    capacity: "2,500L",
    price: 15500,
    image: "/src/assets/product-tank.jpg", 
    description: "Enhanced capacity for growing households and commercial needs.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.6m", diameter: "1.3m" },
    applications: ["Large Family", "Commercial", "Agricultural"]
  },
  {
    id: 4,
    name: "3,000L Cylindrical Tank",
    capacity: "3,000L",
    price: 18500,
    image: "/src/assets/product-tank.jpg",
    description: "Robust solution for larger households and moderate commercial use.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.7m", diameter: "1.4m" },
    applications: ["Large Home", "Office Building", "School"]
  },
  {
    id: 5,
    name: "4,000L Cylindrical Tank", 
    capacity: "4,000L",
    price: 24000,
    image: "/src/assets/product-tank.jpg",
    description: "Professional grade tank for serious water storage requirements.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.8m", diameter: "1.5m" },
    applications: ["Commercial", "Industrial", "Agricultural"]
  },
  {
    id: 6,
    name: "5,000L Cylindrical Tank",
    capacity: "5,000L",
    price: 27000,
    image: "/src/assets/product-tank.jpg",
    description: "Mid-range capacity tank perfect for larger households and small businesses.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "1.9m", diameter: "1.6m" },
    applications: ["Large Home", "Small Business", "Agricultural"]
  },
  {
    id: 7,
    name: "6,000L Cylindrical Tank",
    capacity: "6,000L",
    price: 33000,
    image: "/src/assets/product-tank.jpg",
    description: "Enhanced storage solution for commercial and agricultural applications.",
    features: ["Food Grade Material", "UV Resistant", "Easy Installation", "5 Year Warranty"],
    dimensions: { height: "2.0m", diameter: "1.7m" },
    applications: ["Commercial", "Agricultural", "Industrial"]
  },
  {
    id: 8,
    name: "8,000L Cylindrical Tank",
    capacity: "8,000L",
    price: 45000,
    image: "/src/assets/product-tank.jpg",
    description: "Professional grade tank for serious commercial water storage needs.",
    features: ["Food Grade Material", "UV Resistant", "Reinforced Design", "5 Year Warranty"],
    dimensions: { height: "2.2m", diameter: "1.8m" },
    applications: ["Commercial", "Industrial", "Manufacturing"]
  },
  {
    id: 9,
    name: "10,000L Cylindrical Tank",
    capacity: "10,000L", 
    price: 53000,
    image: "/src/assets/product-tank.jpg",
    description: "Large capacity tank for industrial and commercial applications.",
    features: ["Food Grade Material", "UV Resistant", "Reinforced Design", "5 Year Warranty"],
    dimensions: { height: "2.5m", diameter: "2.0m" },
    applications: ["Industrial", "Large Commercial", "Manufacturing"]
  },
  {
    id: 10,
    name: "16,000L Cylindrical Tank",
    capacity: "16,000L",
    price: 72000,
    image: "/src/assets/product-tank.jpg",
    description: "Heavy-duty tank designed for maximum storage and durability.",
    features: ["Food Grade Material", "UV Resistant", "Reinforced Design", "5 Year Warranty"],
    dimensions: { height: "3.0m", diameter: "2.3m" },
    applications: ["Heavy Industrial", "Municipal", "Agricultural"]
  },
  {
    id: 11,
    name: "20,000L Cylindrical Tank",
    capacity: "20,000L",
    price: 107000,
    image: "/src/assets/product-tank.jpg",
    description: "Premium large-scale storage solution for major facilities.",
    features: ["Food Grade Material", "UV Resistant", "Reinforced Design", "10 Year Warranty"],
    dimensions: { height: "3.2m", diameter: "2.5m" },
    applications: ["Municipal", "Large Industrial", "Water Treatment"]
  },
  {
    id: 12,
    name: "24,000L Cylindrical Tank",
    capacity: "24,000L", 
    price: 134000,
    image: "/src/assets/product-tank.jpg",
    description: "Maximum capacity tank for the most demanding applications.",
    features: ["Food Grade Material", "UV Resistant", "Reinforced Design", "10 Year Warranty"],
    dimensions: { height: "3.5m", diameter: "2.6m" },
    applications: ["Industrial Complex", "Municipal", "Water Distribution"]
  }
];