
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 rounded-lg p-1">
                <img 
                  src="https://i.ibb.co/680Lhnd/image.png" 
                  alt="AO Premium Motors" 
                  className="h-8 w-auto brightness-0 invert" 
                />
              </div>
              <span className="text-xl font-bold tracking-tight">AO MOTORS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining luxury automotive retail since 2015. We bring the world's finest vehicles to your driveway with unmatched transparency and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Search Inventory</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Schedule Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Customer Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pre-Purchase Inspection</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Vehicle Customization</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Extended Warranty</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Nationwide Shipping</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">VIP Concierge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get latest inventory updates and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 px-4 py-3 rounded-lg hover:bg-blue-700 transition-all">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 AO Premium Motors. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
