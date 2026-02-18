
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4 animate-fade-in">Experience Excellence</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Luxury</span> Starts Here.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            Curated selection of world-class vehicles. Exceptional service. A driving experience that defines you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#inventory" 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center flex items-center justify-center gap-2 group"
            >
              Explore Inventory
              <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all text-center">
              Schedule Test Drive
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Cars Sold</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-gray-400">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Quality Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
