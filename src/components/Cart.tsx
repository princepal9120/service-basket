import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { CustomerForm } from "./CustomerForm";
import { Receipt } from "./Receipt";

export const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    setShowCustomerForm(true);
  };

  const handlePaymentSuccess = () => {
    setShowCustomerForm(false);
    setShowReceipt(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowCustomerForm(false);
    setShowReceipt(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-primary hover:bg-primary/90"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        Cart ({items.length})
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg animate-slideIn">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <Button variant="ghost" size="icon" onClick={handleClose}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {showReceipt ? (
                <Receipt onClose={() => {
                  clearCart();
                  handleClose();
                }} />
              ) : showCustomerForm ? (
                <CustomerForm onSuccess={handlePaymentSuccess} />
              ) : (
                <>
                  <div className="flex-1 overflow-auto p-4">
                    {items.length === 0 ? (
                      <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
                    ) : (
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.service.id}
                            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                          >
                            <div className="flex-1">
                              <h3 className="font-medium">{item.service.name}</h3>
                              <p className="text-sm text-gray-500">
                                ${item.service.price.toFixed(2)} × {item.quantity}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.service.id, item.quantity - 1)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.service.id, item.quantity + 1)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.service.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-t p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-lg font-bold">${total().toFixed(2)}</span>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={items.length === 0}
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};