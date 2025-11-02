import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'About', page: 'about' },
    { name: 'Products', page: 'home' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="px-4 md:px-12 lg:px-16 py-6 fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/src/assets/logo.jpeg" 
            alt="Hian Technologies Logo" 
            className="h-12 w-24 md:h-12 md:w-32 rounded-lg object-cover bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50"
          />
          {/* <span className="text-xl md:text-2xl font-bold text-gradient font-figtree">
            Hian Technologies
          </span> */}
        </div>

        {/* Desktop Navigation - Pill Shape */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-200/50 shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                if (item.page === 'home' && item.name === 'Products') {
                  setTimeout(() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`text-sm font-medium transition-colors font-inter ${
                currentPage === item.page ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <button className="hidden lg:block gradient-orange-purple text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm hover:shadow-lg font-inter">
          Get Free Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 animate-slideDown border border-gray-200/50 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setMobileMenuOpen(false);
                if (item.page === 'home' && item.name === 'Products') {
                  setTimeout(() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`block w-full text-left transition-colors font-medium py-2 font-inter ${
                currentPage === item.page ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button className="w-full gradient-orange-purple text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-2 font-inter">
            Get Free Consultation
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
