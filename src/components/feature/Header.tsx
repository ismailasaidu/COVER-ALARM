import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    updateCartCount();
    
    const handleStorageChange = () => {
      updateCartCount();
    };

    const handleOpenCart = () => {
      setIsCartOpen(true);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);
    window.addEventListener('openCart', handleOpenCart);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
      window.removeEventListener('openCart', handleOpenCart);
    };
  }, []);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(total);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: 'ri-home-4-line', color: 'from-red-500 to-orange-500' },
    { name: 'Shop', path: '/shop', icon: 'ri-shopping-bag-3-line', color: 'from-blue-500 to-cyan-500' },
    { name: 'Industrial Solutions', path: '/industrial-solutions', icon: 'ri-building-line', color: 'from-purple-500 to-pink-500' },
    { name: 'Partnerships', path: '/partnerships', icon: 'ri-team-line', color: 'from-green-500 to-teal-500' },
    { name: 'About Us', path: '/about', icon: 'ri-information-line', color: 'from-indigo-500 to-blue-500' },
    { name: 'How to Order', path: '/how-to-order', icon: 'ri-file-list-3-line', color: 'from-amber-500 to-orange-500' },
    { name: 'Contact Us', path: '/contact', icon: 'ri-customer-service-2-line', color: 'from-rose-500 to-red-500' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/561c9d0eb7c4bbdbbffd3e06ce414a8c.png" 
                alt="FireAlarm.ng Logo" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap rounded-xl group overflow-hidden ${
                    location.pathname === link.path
                      ? 'text-white shadow-lg'
                      : 'text-[#2C2C2C] hover:text-white hover:shadow-lg'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Border Box */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'border-transparent' 
                      : 'border-gray-200 group-hover:border-transparent'
                  }`}></div>
                  
                  {/* Icon and Text */}
                  <span className="relative z-10 flex items-center gap-2">
                    <i className={`${link.icon} text-base transition-transform duration-300 group-hover:scale-110 ${
                      location.pathname === link.path ? 'scale-110' : ''
                    }`}></i>
                    <span>{link.name}</span>
                  </span>
                  
                  {/* Active Indicator Dot */}
                  {location.pathname === link.path && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                  )}
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-[#D32F2F] to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-110 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <i className="ri-shopping-cart-line text-xl transition-transform group-hover:scale-110 relative z-10"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 text-[#2C2C2C] text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#D32F2F] hover:to-orange-500 text-[#2C2C2C] hover:text-white shadow-md hover:shadow-lg hover:scale-110 group"
              >
                <i className={`text-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-up">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg relative overflow-hidden group ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-[#2C2C2C] hover:text-white'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} transition-opacity duration-300 ${
                    location.pathname === link.path 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Border */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'border-transparent' 
                      : 'border-gray-200 group-hover:border-transparent'
                  }`}></div>
                  
                  {/* Content */}
                  <i className={`${link.icon} text-lg relative z-10`}></i>
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse relative z-10"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
