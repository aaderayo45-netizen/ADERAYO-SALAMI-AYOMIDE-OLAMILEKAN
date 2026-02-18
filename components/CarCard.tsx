
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {car.year}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 p-2 rounded-full shadow-sm transition-colors">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {car.make} {car.model}
            </h3>
            <p className="text-sm text-gray-500">{car.type} • {car.fuelType}</p>
          </div>
          <div className="text-xl font-extrabold text-blue-600">
            ${car.price.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center gap-4 my-4 py-4 border-y border-gray-50">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <i className="fas fa-tachometer-alt text-blue-500"></i>
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <i className="fas fa-cog text-blue-500"></i>
            <span>{car.transmission}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-6">
          {car.description}
        </p>

        <div className="mt-auto flex gap-2">
          <button className="flex-1 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95">
            View Details
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-all">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
