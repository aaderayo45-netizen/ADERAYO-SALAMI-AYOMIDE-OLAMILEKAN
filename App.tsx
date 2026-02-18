
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Statistics/Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: 'fa-shield-alt', title: 'Verified History', desc: 'All vehicles come with full CARFAX reports' },
                { icon: 'fa-handshake', title: 'Easy Finance', desc: 'Approvals in under 30 minutes' },
                { icon: 'fa-shipping-fast', title: 'Free Delivery', desc: 'Within 100 miles of our showrooms' },
                { icon: 'fa-tools', title: 'Service Warranty', desc: '12-month standard premium warranty' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fas ${item.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Inventory />

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to find your dream car?</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Join thousands of happy drivers who found their perfect match with AO Premium Motors. 
              Our experts are ready to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1">
                Browse All Cars
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* About/Showroom Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070" alt="Showroom" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-[250px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="font-bold text-slate-900">Certified</span>
                  </div>
                  <p className="text-sm text-gray-500">Every vehicle undergoes a rigorous 200-point inspection by certified technicians.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">We're transforming the way you buy luxury cars.</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  AO Premium Motors was founded on a simple principle: buying a high-end vehicle should be as exhilarating as driving one. We've eliminated the stress of traditional dealerships by prioritizing transparency, technology, and customer delight.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-[10px]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Transparent Pricing</h4>
                      <p className="text-sm text-gray-500">No hidden fees, no surprise markups. What you see is what you pay.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-[10px]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Digital-First Approach</h4>
                      <p className="text-sm text-gray-500">From virtual tours to online financing, we respect your time.</p>
                    </div>
                  </div>
                </div>
                
                <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read more about us <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Sales Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
