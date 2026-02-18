
import React from 'react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1">
              {/* Mocking the user's logo with text/icon if image fails, but placing logo img here */}
              <img 
                src="https://i.ibb.co/680Lhnd/image.png" 
                alt="AO Premium Motors" 
                className="h-10 w-auto brightness-0 invert" 
                onError={(e) => {
                   // Fallback to a styled text if logo fails to load
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                   const parent = target.parentElement;
                   if(parent) parent.innerHTML = '<span class="text-white font-bold text-2xl">AO</span>';
                }}
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">AO</span>
              <span className="text-xl font-light tracking-tight text-slate-500">MOTORS</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#inventory" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Inventory</a>
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-md active:scale-95">
              Contact Us
            </button>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-600 p-2">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
