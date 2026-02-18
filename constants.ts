
import { Car } from './types';

export const CAR_INVENTORY: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    type: 'Electric',
    mileage: 1200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/tesla/800/500',
    description: 'The ultimate electric sedan with record-breaking acceleration and long range.',
    features: ['Autopilot', 'Panoramic Roof', 'Premium Audio', 'Heated Seats']
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5 xDrive40i',
    year: 2023,
    price: 65500,
    type: 'SUV',
    mileage: 15400,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/bmwx5/800/500',
    description: 'Luxury meets versatility in this flagship SUV from BMW.',
    features: ['AWD', 'Leather Interior', 'Navigation', 'Sunroof']
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2022,
    price: 105000,
    type: 'Coupe',
    mileage: 8200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/porsche/800/500',
    description: 'The legendary sports car experience with unmatched precision.',
    features: ['Sport Chrono', 'Turbocharged Engine', 'Bose Surround', 'Keyless Entry']
  },
  {
    id: '4',
    make: 'Ford',
    model: 'F-150 Lightning',
    year: 2023,
    price: 55900,
    type: 'Truck',
    mileage: 4500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/f150/800/500',
    description: 'The smartest, most innovative truck Ford has ever built.',
    features: ['Pro Power Onboard', 'Mega Power Frunk', 'AWD', 'Tow Package']
  },
  {
    id: '5',
    make: 'Audi',
    model: 'A6',
    year: 2021,
    price: 42000,
    type: 'Sedan',
    mileage: 32000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/audia6/800/500',
    description: 'A sophisticated sedan that balances performance and efficiency.',
    features: ['Virtual Cockpit', 'Matrix LED Lights', 'Quattro AWD', 'Adaptive Cruise']
  },
  {
    id: '6',
    make: 'Range Rover',
    model: 'Sport',
    year: 2024,
    price: 115000,
    type: 'SUV',
    mileage: 500,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    image: 'https://picsum.photos/seed/rover/800/500',
    description: 'Refinement and capability redefined for the modern driver.',
    features: ['Air Suspension', 'Pivi Pro', 'Massaging Seats', '3D Camera']
  }
];

export const LOGO_URL = "https://i.ibb.co/hJ6N6C4/ao-logo.png"; // User provided logo representation
