import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";

interface ReceiptProps {
  onClose: () => void;
}

export const Receipt = ({ onClose }: ReceiptProps) => {
  const { items, customer, total } = useCart();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-gray-500">Your purchase was successful</p>
      </div>

      <div className="border-t border-b py-4">
        <div className="text-sm text-gray-500 mb-2">
          <div>Date: {date}</div>
          <div>Time: {time}</div>
        </div>

        {customer && (
          <div className="mb-4">
            <h4 className="font-medium">Customer Details:</h4>
            <div className="text-sm text-gray-600">
              <div>{customer.name}</div>
              <div>{customer.email}</div>
              <div>{customer.phone}</div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="font-medium">Items:</h4>
          {items.map((item) => (
            <div key={item.service.id} className="flex justify-between text-sm">
              <span>
                {item.service.name} × {item.quantity}
              </span>
              <span>${(item.service.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-2 border-t flex justify-between font-bold">
          <span>Total</span>
          <span>${total().toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={onClose}
        className="w-full bg-primary hover:bg-primary/90"
      >
        Done
      </Button>
    </div>
  );
};