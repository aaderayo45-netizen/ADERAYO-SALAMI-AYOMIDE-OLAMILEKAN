
import React, { useState, useMemo } from 'react';
import { CAR_INVENTORY } from '../constants';
import CarCard from './CarCard';

const Inventory: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Sedan', 'SUV', 'Truck', 'Coupe', 'Electric'];

  const filteredCars = useMemo(() => {
    if (filter === 'All') return CAR_INVENTORY;
    return CAR_INVENTORY.filter(car => car.type === filter);
  }, [filter]);

  return (
    <section id="inventory" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Inventory</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Featured Vehicles</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  filter === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <i className="fas fa-search text-gray-300 text-6xl mb-4"></i>
            <h4 className="text-xl font-bold text-slate-900">No cars found</h4>
            <p className="text-gray-500">Try adjusting your filters to find your perfect match.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
            View Full Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
