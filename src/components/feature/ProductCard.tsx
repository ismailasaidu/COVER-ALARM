import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  category: string;
  benefits?: string[];
}

export default function ProductCard({ id, name, model, price, image, category, benefits }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((item: any) => item.id === id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        id,
        name,
        model,
        price,
        image,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    
    setShowToast(true);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleViewCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('openCart'));
    setShowToast(false);
  };

  return (
    <>
      <Link
        to={`/product/${id}`}
        className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
        data-product-shop
      >
        {/* Image */}
        <div className="relative w-full h-64 bg-gray-50 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-[#D32F2F] text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-[#2C2C2C] mb-1 line-clamp-2 group-hover:text-[#D32F2F] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{model}</p>

          {/* Benefits */}
          {benefits && benefits.length > 0 && (
            <ul className="mb-3 space-y-1 flex-1">
              {benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                  <i className="ri-check-line text-green-600 text-sm flex-shrink-0 mt-0.5"></i>
                  <span className="line-clamp-1">{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-xl font-bold text-[#2C2C2C]">₦{price.toLocaleString()}</p>
              <p className="text-xs text-green-600 font-medium">✓ FREE Installation</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isAdding
                  ? 'bg-green-500 text-white'
                  : 'bg-[#D32F2F] text-white hover:bg-[#B71C1C]'
              }`}
            >
              <i className={`text-lg ${isAdding ? 'ri-check-line' : 'ri-shopping-cart-line'}`}></i>
            </button>
          </div>
        </div>
      </Link>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-center gap-4 animate-slide-up max-w-sm">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-check-line text-2xl text-green-600"></i>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#2C2C2C] mb-1">Added to Cart!</p>
            <p className="text-xs text-gray-600 line-clamp-1">{name}</p>
          </div>
          <button
            onClick={handleViewCart}
            className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-medium rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer whitespace-nowrap"
          >
            View Cart
          </button>
        </div>
      )}
    </>
  );
}
