import { Service } from "@/types/pos";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
        </div>
        <span className="text-lg font-bold text-primary">${service.price.toFixed(2)}</span>
      </div>
      <p className="text-gray-600 text-sm mt-2">{service.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm font-medium text-gray-500">{service.category}</span>
        <Button
          onClick={() => addItem(service)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};