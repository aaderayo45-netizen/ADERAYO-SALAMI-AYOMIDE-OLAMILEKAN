
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  type: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Electric';
  mileage: number;
  fuelType: 'Gasoline' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  image: string;
  description: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
