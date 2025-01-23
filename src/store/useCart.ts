import { create } from 'zustand';
import { CartItem, Customer, Service } from '@/types/pos';

interface CartStore {
  items: CartItem[];
  customer: Customer | null;
  addItem: (service: Service) => void;
  removeItem: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  setCustomer: (customer: Customer) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  customer: null,
  addItem: (service) => {
    set((state) => {
      const existingItem = state.items.find(item => item.service.id === service.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.service.id === service.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { service, quantity: 1 }] };
    });
  },
  removeItem: (serviceId) => {
    set((state) => ({
      items: state.items.filter(item => item.service.id !== serviceId),
    }));
  },
  updateQuantity: (serviceId, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.service.id === serviceId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ),
    }));
  },
  setCustomer: (customer) => {
    set({ customer });
  },
  clearCart: () => {
    set({ items: [], customer: null });
  },
  total: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + (item.service.price * item.quantity), 0);
  },
}));