import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/hooks/useCart";

export default function CartSidebar() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const {
    cartItems,
    cartTotal,
    cartCount,
    updateCart,
    removeFromCart,
    isUpdatingCart,
    isRemovingFromCart,
  } = useCart();

  const deliveryFee = cartTotal > 500 ? 0 : 40;
  const finalTotal = cartTotal + deliveryFee;

  const handleCheckout = () => {
    setIsOpen(false);
    setLocation('/checkout');
  };

  // This component is controlled by external triggers (like cart button in header)
  // For now, we'll keep it simple and not auto-open
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart</span>
            <Badge variant="secondary" className="bg-primary text-white">
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </Badge>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Start adding some fresh vegetables and fruits!</p>
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  setLocation('/products');
                }}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <img
                      src={item.product.imageUrl || 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">per {item.product.unit}</p>
                      <p className="text-primary font-semibold">₹{item.product.price}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-6 h-6"
                            onClick={() => updateCart({ 
                              id: item.id, 
                              quantity: Math.max(1, item.quantity - 1) 
                            })}
                            disabled={item.quantity <= 1 || isUpdatingCart}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-semibold text-sm w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-6 h-6"
                            onClick={() => updateCart({ 
                              id: item.id, 
                              quantity: item.quantity + 1 
                            })}
                            disabled={isUpdatingCart}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <span className="font-semibold text-primary">
                          ₹{(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-red-500 flex-shrink-0"
                      onClick={() => removeFromCart(item.id)}
                      disabled={isRemovingFromCart}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-xs text-gray-600">
                      Free delivery on orders above ₹500
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">₹{finalTotal.toFixed(2)}</span>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      setLocation('/cart');
                    }}
                  >
                    View Full Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
