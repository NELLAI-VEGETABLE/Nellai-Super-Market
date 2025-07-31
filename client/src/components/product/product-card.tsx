import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Plus } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isAddingToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      quantity: 1,
    });
  };

  const hasDiscount = product.originalPrice && 
    parseFloat(product.originalPrice) > parseFloat(product.price);

  // Default image for products
  const defaultImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative">
            <img
              src={product.imageUrl || defaultImage}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              {product.featured && (
                <Badge className="bg-primary text-white">Featured</Badge>
              )}
              {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
              {hasDiscount && product.inStock && (
                <Badge className="bg-orange-500 text-white ml-1">Sale</Badge>
              )}
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-3 right-3 bg-white hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Wishlist functionality can be implemented later
              }}
            >
              <Heart className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
          
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-2">
              {product.description || "Fresh, quality produce delivered to your doorstep"}
            </p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">
                  ₹{product.price}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">per {product.unit}</span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center mb-3">
              <div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <Button
              className="w-full bg-primary text-white hover:bg-primary/90 transition-colors"
              onClick={handleAddToCart}
              disabled={!product.inStock || isAddingToCart}
            >
              {isAddingToCart ? (
                'Adding...'
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
