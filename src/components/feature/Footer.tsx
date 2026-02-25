import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-3 md:mb-4">
              <img 
                src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/561c9d0eb7c4bbdbbffd3e06ce414a8c.png" 
                alt="FireAlarm.ng" 
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
              Nigeria's trusted fire safety equipment supplier. NFEC-certified products. Professional installation. Nationwide delivery.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://www.instagram.com/firealarm.ng/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-base md:text-lg"></i>
              </a>
              <a href="https://www.instagram.com/firealarm.ng/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-base md:text-lg"></i>
              </a>
              <a href="https://www.instagram.com/firealarm.ng/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-base md:text-lg"></i>
              </a>
              <a href="https://www.instagram.com/firealarm.ng/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-base md:text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  How to Order
                </Link>
              </li>
              <li>
                <Link to="/industrial-solutions" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Industrial Solutions
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Customer Support</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Support Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs md:text-sm">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Get In Touch</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-phone-line text-red-600 text-lg md:text-xl flex-shrink-0"></i>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <a href="tel:+2348145540554" className="text-white hover:text-red-600 transition-colors cursor-pointer text-xs md:text-sm">
                    0814 554 0554
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-whatsapp-line text-red-600 text-lg md:text-xl flex-shrink-0"></i>
                <div>
                  <p className="text-xs text-gray-400">WhatsApp</p>
                  <a 
                    href="https://wa.me/2348145540554" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600 transition-colors cursor-pointer text-xs md:text-sm"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-mail-line text-red-600 text-lg md:text-xl flex-shrink-0"></i>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a href="mailto:info@firealarm.ng" className="text-white hover:text-red-600 transition-colors cursor-pointer text-xs md:text-sm">
                    info@firealarm.ng
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-map-pin-line text-red-600 text-lg md:text-xl flex-shrink-0"></i>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white text-xs md:text-sm">Abuja, Nigeria</p>
                  <p className="text-xs text-gray-400 mt-1">Serving all 36 states</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <i className="ri-shield-check-line text-2xl md:text-3xl text-red-600 mb-1 md:mb-2"></i>
              <p className="text-xs md:text-sm font-semibold">NFEC Certified</p>
              <p className="text-[10px] md:text-xs text-gray-400">All Equipment</p>
            </div>
            <div>
              <i className="ri-time-line text-2xl md:text-3xl text-red-600 mb-1 md:mb-2"></i>
              <p className="text-xs md:text-sm font-semibold">48-Hour Install</p>
              <p className="text-[10px] md:text-xs text-gray-400">Guaranteed</p>
            </div>
            <div>
              <i className="ri-map-pin-line text-2xl md:text-3xl text-red-600 mb-1 md:mb-2"></i>
              <p className="text-xs md:text-sm font-semibold">Nationwide</p>
              <p className="text-[10px] md:text-xs text-gray-400">All 36 States</p>
            </div>
            <div>
              <i className="ri-customer-service-2-line text-2xl md:text-3xl text-red-600 mb-1 md:mb-2"></i>
              <p className="text-xs md:text-sm font-semibold">24/7 Support</p>
              <p className="text-[10px] md:text-xs text-gray-400">Always Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © 2025 FireAlarm.ng. All rights reserved. Protecting Nigerian businesses since 2018.
            </p>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Terms of Service
              </a>
              <a 
                href="https://readdy.ai/?ref=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}