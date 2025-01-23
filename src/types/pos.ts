export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface Receipt {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  date: Date;
}