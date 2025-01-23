import { useState } from "react";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CustomerFormProps {
  onSuccess: () => void;
}

export const CustomerForm = ({ onSuccess }: CustomerFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const setCustomer = useCart((state) => state.setCustomer);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const customer = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    };

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCustomer(customer);
    setIsLoading(false);
    toast.success("Payment processed successfully!");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
      
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(123) 456-7890"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-success hover:bg-success/90"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Complete Purchase"}
      </Button>
    </form>
  );
};