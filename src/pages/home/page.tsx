import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';
import { allProducts } from '../../mocks/products';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [promoSlide, setPromoSlide] = useState(0);
  const [currentPromo, setCurrentPromo] = useState(0);

  const heroSlides = [
    {
      image: 'https://readdy.ai/api/search-image?query=modern%20fire%20safety%20equipment%20display%20showroom%20professional%20product%20photography%20red%20fire%20extinguishers%20smoke%20detectors%20organized%20shelves%20clean%20commercial%20setting%20bright%20lighting&width=1920&height=600&seq=hero-static-main&orientation=landscape',
      alt: 'Fire Safety Equipment Showroom'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=red%20fire%20extinguishers%20and%20fire%20hydrants%20equipment%20display%20professional%20product%20photography%20clean%20showroom%20organized%20fire%20safety%20gear%20bright%20commercial%20setting&width=1920&height=600&seq=hero-extinguisher-hydrant&orientation=landscape',
      alt: 'Fire Extinguishers and Hydrants'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=fire%20alarm%20control%20panels%20and%20white%20smoke%20detectors%20sensors%20equipment%20display%20professional%20product%20photography%20clean%20showroom%20organized%20safety%20systems%20bright%20commercial%20setting&width=1920&height=600&seq=hero-alarm-smoke&orientation=landscape',
      alt: 'Alarm Panels and Smoke Sensors'
    }
  ];

  const promoSlides = [
    {
      title: 'Complete Fire Protection Package',
      subtitle: 'Everything you need in one bundle',
      price: '₦600,000',
      oldPrice: '₦850,000',
      savings: 'Save ₦250,000',
      badge: 'BEST VALUE',
      features: ['8× Smoke Detectors', 'Fire Alarm Control Panel', '6× Fire Extinguishers', '1 Year FREE Monitoring'],
      image: 'https://readdy.ai/api/search-image?query=complete%20fire%20safety%20equipment%20bundle%20package%20fire%20extinguisher%20smoke%20detector%20alarm%20control%20panel%20together%20product%20photography%20white%20background%20professional%20commercial%20display%20organized%20layout&width=800&height=500&seq=promo-complete-package&orientation=landscape',
      bgColor: 'from-red-600 to-red-800'
    },
    {
      title: 'Industrial Fire Sprinkler System',
      subtitle: 'Automated fire suppression for large facilities',
      price: '₦1,250,000',
      oldPrice: '₦1,800,000',
      savings: 'Save ₦550,000',
      badge: 'LIMITED OFFER',
      features: ['20× Sprinkler Heads', 'Control Valve System', 'Professional Installation', 'FREE Inspection'],
      image: 'https://readdy.ai/api/search-image?query=industrial%20fire%20sprinkler%20system%20chrome%20sprinkler%20heads%20pipes%20valves%20professional%20product%20photography%20white%20background%20commercial%20installation%20equipment&width=800&height=500&seq=promo-sprinkler-system&orientation=landscape',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Smart Fire Alarm Bundle',
      subtitle: 'WiFi-enabled monitoring for modern businesses',
      price: '₦450,000',
      oldPrice: '₦650,000',
      savings: 'Save ₦200,000',
      badge: 'HOT DEAL',
      features: ['12× Smart Smoke Detectors', 'WiFi Control Panel', 'Mobile App Access', 'Cloud Monitoring'],
      image: 'https://readdy.ai/api/search-image?query=smart%20fire%20alarm%20system%20wifi%20smoke%20detectors%20control%20panel%20smartphone%20app%20professional%20product%20photography%20white%20background%20modern%20technology%20equipment&width=800&height=500&seq=promo-smart-alarm&orientation=landscape',
      bgColor: 'from-green-600 to-green-800'
    }
  ];

  const promoMessages = [
    {
      icon: 'ri-gift-line',
      text: 'FREE Installation on All Orders Above ₦500,000',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      bgGradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20'
    },
    {
      icon: 'ri-truck-line',
      text: '48-Hour Express Delivery to All 36 States',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      bgGradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20'
    },
    {
      icon: 'ri-shield-check-line',
      text: 'Get 1 Year FREE Monitoring with Complete Packages',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
    },
    {
      icon: 'ri-percent-line',
      text: 'Save Up to 30% on Fire Safety Bundles This Month',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoSlide((prev) => (prev + 1) % promoSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promoMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const quickCategories = [
    { name: 'Fire Extinguishers', link: '/shop?category=Fire Extinguishers', icon: 'ri-fire-line', count: '20+ Products', image: 'https://readdy.ai/api/search-image?query=red%20fire%20extinguisher%20product%20photo%20clean%20white%20background%20professional%20commercial%20photography%20safety%20equipment&width=300&height=300&seq=cat-ext&orientation=squarish', color: 'from-red-500 to-orange-500', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
    { name: 'Smoke Detectors', link: '/shop?category=Smoke Detectors', icon: 'ri-alarm-warning-line', count: '15+ Products', image: 'https://readdy.ai/api/search-image?query=white%20smoke%20detector%20alarm%20product%20photo%20clean%20background%20professional%20commercial%20photography%20ceiling%20mounted&width=300&height=300&seq=cat-smoke&orientation=squarish', color: 'from-blue-500 to-cyan-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
    { name: 'Fire Alarm Systems', link: '/shop?category=Fire Alarm Systems', icon: 'ri-notification-2-line', count: '12+ Products', image: 'https://readdy.ai/api/search-image?query=fire%20alarm%20control%20panel%20product%20photo%20white%20background%20professional%20commercial%20photography%20red%20emergency%20system&width=300&height=300&seq=cat-alarm&orientation=squarish', color: 'from-purple-500 to-pink-500', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
    { name: 'Sprinkler Systems', link: '/shop?category=Fire Sprinklers', icon: 'ri-water-flash-line', count: '10+ Products', image: 'https://readdy.ai/api/search-image?query=chrome%20fire%20sprinkler%20head%20product%20photo%20white%20background%20professional%20commercial%20photography%20ceiling%20safety%20equipment&width=300&height=300&seq=cat-sprink&orientation=squarish', color: 'from-teal-500 to-emerald-500', iconBg: 'bg-teal-100', iconColor: 'text-teal-600' },
    { name: 'Fire Hydrants', link: '/shop?category=Fire Hydrants', icon: 'ri-drop-line', count: '8+ Products', image: 'https://readdy.ai/api/search-image?query=red%20fire%20hydrant%20hose%20reel%20product%20photo%20white%20background%20professional%20commercial%20photography%20emergency%20equipment&width=300&height=300&seq=cat-hydrant&orientation=squarish', color: 'from-rose-500 to-red-500', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
    { name: 'Fire Suppression', link: '/shop?category=Fire Suppression', icon: 'ri-shield-flash-line', count: '15+ Products', image: 'https://readdy.ai/api/search-image?query=fire%20suppression%20system%20equipment%20product%20photo%20white%20background%20professional%20commercial%20photography%20safety%20control&width=300&height=300&seq=cat-suppression&orientation=squarish', color: 'from-indigo-500 to-blue-500', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { name: 'Safety Signage', link: '/shop?category=Safety Signage', icon: 'ri-road-map-line', count: '25+ Products', image: 'https://readdy.ai/api/search-image?query=fire%20exit%20safety%20sign%20product%20photo%20white%20background%20professional%20commercial%20photography%20green%20emergency%20signage&width=300&height=300&seq=cat-sign&orientation=squarish', color: 'from-green-500 to-lime-500', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    { name: 'Fire Alarm Cables', link: '/shop?category=Fire Alarm Cables', icon: 'ri-plug-line', count: '12+ Products', image: 'https://readdy.ai/api/search-image?query=red%20fire%20alarm%20cable%20wire%20coil%20product%20photo%20white%20background%20professional%20commercial%20photography%20electrical%20safety%20equipment&width=300&height=300&seq=cat-cable&orientation=squarish', color: 'from-amber-500 to-yellow-500', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
    { name: 'Safety Wearables', link: '/shop?category=Safety Wearables', icon: 'ri-shield-user-line', count: '18+ Products', image: 'https://readdy.ai/api/search-image?query=fire%20safety%20helmet%20gloves%20protective%20gear%20product%20photo%20white%20background%20professional%20commercial%20photography%20safety%20equipment&width=300&height=300&seq=cat-wear&orientation=squarish', color: 'from-orange-500 to-red-500', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
    { name: 'Fire Exit Doors', link: '/shop?category=Fire Exit Doors', icon: 'ri-door-open-line', count: '8+ Products', image: 'https://readdy.ai/api/search-image?query=red%20fire%20exit%20emergency%20door%20product%20photo%20white%20background%20professional%20commercial%20photography%20safety%20equipment&width=300&height=300&seq=cat-door&orientation=squarish', color: 'from-cyan-500 to-blue-500', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        {/* Animated Promotional Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          {promoMessages.map((promo, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentPromo === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.bgGradient} animate-pulse`}></div>
              <div className="relative z-10 py-3 md:py-4">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${promo.gradient} flex items-center justify-center animate-bounce-slow shadow-lg`}>
                      <i className={`${promo.icon} text-white text-lg md:text-xl`}></i>
                    </div>
                    <p className={`text-sm md:text-lg font-bold bg-gradient-to-r ${promo.gradient} bg-clip-text text-transparent animate-glow`}>
                      {promo.text}
                    </p>
                    <div className="hidden sm:flex items-center gap-2">
                      <Link
                        to="/shop"
                        className={`px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r ${promo.gradient} text-white text-xs md:text-sm font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap`}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Progress Indicators */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {promoMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  currentPromo === index
                    ? 'w-6 md:w-8 h-1.5 bg-white rounded-full'
                    : 'w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60'
                }`}
                aria-label={`Go to promo ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Hero Slider Section */}
        <section className="relative h-[400px] md:h-[600px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
            </div>
          ))}

          <div className="relative h-full flex items-center justify-center z-10">
            <div className="text-center text-white px-4 md:px-6 max-w-4xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                Fire Safety Equipment<br />Delivered & Installed Nationwide
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-100">
                Shop Certified Fire Extinguishers, Alarms, Detectors & Sprinklers. FREE Installation. 48-hour Delivery To All 36 States.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-[#D32F2F] text-white text-base md:text-lg font-bold rounded-lg hover:bg-[#B71C1C] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap text-center"
                >
                  Shop All Products
                </Link>
                <a
                  href={`https://wa.me/2348145540554?text=${encodeURIComponent('I want to order fire safety equipment')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-[#25D366] text-white text-sm md:text-base font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? 'bg-[#D32F2F] w-6 md:w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* Trust Bar with Free Monitoring Highlight */}
        <section className="bg-[#D32F2F] text-white py-2 md:py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xs md:text-sm font-semibold">
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-shield-check-line text-base md:text-lg"></i>
                <span>NFEC Certified</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/20 px-2 md:px-3 py-1 rounded-full">
                <i className="ri-tools-line text-base md:text-lg"></i>
                <span className="hidden sm:inline">FREE Installation</span>
                <span className="sm:hidden">FREE MONITORING</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-truck-line text-base md:text-lg"></i>
                <span>All 36 States</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-time-line text-base md:text-lg"></i>
                <span className="hidden sm:inline">48-Hour Delivery</span>
                <span className="sm:hidden">48hrs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Category - Enhanced Design */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white rounded-full mb-3 md:mb-4 shadow-lg">
                <i className="ri-fire-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">Browse Our Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#D32F2F] via-orange-500 to-[#D32F2F] bg-clip-text text-transparent">Shop by Category</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-8">Find exactly what you need for complete fire protection</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mb-6 md:mb-10">
              {quickCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-white relative overflow-hidden"
                  style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 flex items-center justify-center rounded-xl md:rounded-2xl ${category.iconBg} group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <i className={`${category.icon} text-2xl sm:text-3xl md:text-4xl ${category.iconColor} group-hover:scale-125 transition-transform duration-500`}></i>
                    </div>
                    
                    {/* Product Image */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 group-hover:bg-white transition-all duration-500 shadow-md group-hover:shadow-lg">
                      <img src={category.image} alt={category.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <h3 className="font-bold text-xs sm:text-sm md:text-base text-[#2C2C2C] group-hover:bg-gradient-to-r group-hover:from-[#D32F2F] group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-1 md:mb-2">
                      {category.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-2 md:mb-3 font-medium">{category.count}</p>
                    
                    {/* Explore Button */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r ${category.color} text-white shadow-lg transform translate-y-2 group-hover:translate-y-0`}>
                      <span>Explore</span>
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl cursor-pointer whitespace-nowrap group hover:scale-105 transition-all duration-300"
              >
                <span>View All Products</span>
                <i className="ri-arrow-right-line text-lg md:text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Promo Slider Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Special Offers</h2>
              <p className="text-sm md:text-base text-gray-600">Limited time deals on complete fire safety bundles</p>
            </div>

            <div className="relative">
              {promoSlides.map((promo, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    promoSlide === index ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${promo.bgColor} rounded-xl md:rounded-2xl overflow-hidden shadow-2xl`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-6 md:p-12 items-center">
                      <div className="text-white">
                        <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/20 rounded-full mb-3 md:mb-4">
                          <span className="text-xs md:text-sm font-bold">{promo.badge}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">{promo.title}</h3>
                        <p className="text-base md:text-xl text-white/90 mb-4 md:mb-6">{promo.subtitle}</p>
                        
                        <div className="mb-4 md:mb-6">
                          <div className="flex items-baseline gap-2 md:gap-3 mb-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{promo.price}</span>
                            <span className="text-lg md:text-2xl text-white/60 line-through">{promo.oldPrice}</span>
                          </div>
                          <span className="inline-block px-2 md:px-3 py-1 bg-green-500 text-white text-xs md:text-sm font-bold rounded-full">
                            {promo.savings}
                          </span>
                        </div>

                        <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
                          {promo.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                              <i className="ri-checkbox-circle-fill text-green-300 flex-shrink-0"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={`https://wa.me/2348145540554?text=${encodeURIComponent(`I want to buy the ${promo.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
                        >
                          <i className="ri-shopping-bag-line text-lg md:text-xl"></i>
                          Buy Today
                        </a>
                      </div>

                      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg md:rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-3 md:p-4">
                        <img
                          src={promo.image}
                          alt={promo.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {promoSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPromoSlide(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${
                      promoSlide === index
                        ? 'bg-[#D32F2F] w-8 md:w-10'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to promo ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Monitoring Section */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#1a1a1a] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 md:w-32 h-20 md:h-32 border-4 border-[#D32F2F] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 md:w-40 h-24 md:h-40 border-4 border-[#D32F2F] rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 md:w-24 h-16 md:h-24 border-4 border-[#D32F2F] rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F] rounded-full mb-4 md:mb-6">
                  <i className="ri-eye-line text-base md:text-lg"></i>
                  <span className="text-xs md:text-sm font-bold">24/7 Protection</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Live Fire Monitoring Control Centre
                </h2>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Round-the-clock surveillance of your fire safety systems. Our monitoring centre responds to alerts in real-time, dispatching emergency response teams within 15 minutes.
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D32F2F]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-radar-line text-xl md:text-2xl text-[#D32F2F]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Real-Time Alerts</h4>
                      <p className="text-gray-400 text-xs md:text-sm">Instant notifications to you and emergency responders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D32F2F]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-team-line text-xl md:text-2xl text-[#D32F2F]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Trained Response Team</h4>
                      <p className="text-gray-400 text-xs md:text-sm">Professional firefighters on standby 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D32F2F]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-dashboard-line text-xl md:text-2xl text-[#D32F2F]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Live Dashboard Access</h4>
                      <p className="text-gray-400 text-xs md:text-sm">Monitor your facilities from anywhere, anytime</p>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2348145540554?text=${encodeURIComponent('I want to subscribe to 24/7 fire monitoring')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#D32F2F] text-white text-base md:text-lg font-bold rounded-lg hover:bg-[#B71C1C] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-checkbox-circle-line text-lg md:text-xl"></i>
                  Subscribe Today
                </a>
              </div>

              <div className="relative">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20fire%20monitoring%20control%20room%20with%20multiple%20screens%20showing%20surveillance%20feeds%20professional%20security%20operators%20monitoring%20systems%20high%20tech%20command%20center%20dramatic%20lighting%20professional%20photography&width=800&height=600&seq=monitoring-center&orientation=landscape"
                    alt="24/7 Fire Monitoring Control Centre"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <div className="flex items-center gap-2 md:gap-4 text-white flex-wrap">
                      <div className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500 rounded-lg">
                        <div className="text-lg md:text-2xl font-bold">24/7</div>
                        <div className="text-[10px] md:text-xs">Active</div>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F] rounded-lg">
                        <div className="text-lg md:text-2xl font-bold">&lt;15min</div>
                        <div className="text-[10px] md:text-xs">Response</div>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500 rounded-lg">
                        <div className="text-lg md:text-2xl font-bold">2000+</div>
                        <div className="text-[10px] md:text-xs">Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fire Installation Projects Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/4da04667e313995333f3353738718298.jpeg"
                    alt="FireAlarm.ng Professional Installation Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-48 h-32 md:h-48 bg-[#D32F2F]/10 rounded-full blur-3xl"></div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F]/10 rounded-full mb-4 md:mb-6">
                  <i className="ri-tools-fill text-[#D32F2F] text-sm md:text-base"></i>
                  <span className="text-xs md:text-sm font-bold text-[#D32F2F]">Professional Services</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#2C2C2C] leading-tight">
                  Do You Have a Fire Installation Project?
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8">
                  From small offices to large industrial complexes, our certified engineers handle complete fire safety installations. Get expert consultation, custom system design, and professional installation backed by NFEC certification.
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-1">500+</div>
                    <div className="text-xs md:text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-1">100%</div>
                    <div className="text-xs md:text-sm text-gray-600">Inspection Pass Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-1">36</div>
                    <div className="text-xs md:text-sm text-gray-600">States Coverage</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-1">15+</div>
                    <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-check-line text-green-600 text-lg md:text-xl flex-shrink-0"></i>
                    <span className="text-sm md:text-base text-gray-700">Custom fire safety system design</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-check-line text-green-600 text-lg md:text-xl flex-shrink-0"></i>
                    <span className="text-sm md:text-base text-gray-700">Professional installation & commissioning</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-check-line text-green-600 text-lg md:text-xl flex-shrink-0"></i>
                    <span className="text-sm md:text-base text-gray-700">NFEC certification assistance</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-check-line text-green-600 text-lg md:text-xl flex-shrink-0"></i>
                    <span className="text-sm md:text-base text-gray-700">Ongoing maintenance & support</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2348145540554?text=${encodeURIComponent('I have a fire installation project. I need expert consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#D32F2F] text-white text-base md:text-lg font-bold rounded-lg hover:bg-[#B71C1C] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-customer-service-2-line text-lg md:text-xl"></i>
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-1 md:mb-2">2,000+</div>
                <div className="text-xs md:text-sm text-gray-600">Businesses Protected</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-1 md:mb-2">48hrs</div>
                <div className="text-xs md:text-sm text-gray-600">Average Delivery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-gray-600">Inspection Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F] mb-1 md:mb-2">36</div>
                <div className="text-xs md:text-sm text-gray-600">States Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-red-100">
              Speak with our fire safety experts. Get a custom quote in 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href={`https://wa.me/2348145540554?text=${encodeURIComponent('I need help choosing fire safety equipment')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#25D366] text-white text-base md:text-lg font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-xl md:text-2xl"></i>
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2348145540554"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-[#2C2C2C] text-base md:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-xl md:text-2xl"></i>
                Call: 0814 554 0554
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
