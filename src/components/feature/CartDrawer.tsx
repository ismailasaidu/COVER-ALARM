import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    loadCart();
  }, [isOpen]);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '2348145540554';
    
    let message = 'Hi! I would like to order the following items:\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Model: ${item.model}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `Total: ₦${getTotalPrice().toLocaleString()}\n\n`;
    message += 'Please confirm availability and delivery details.';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-[#2C2C2C]">Shopping Cart</h2>
            {cartItems.length > 0 && (
              <span className="px-2 py-1 bg-[#D32F2F] text-white text-xs font-medium rounded-full">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">Your cart is empty</h3>
              <p className="text-sm text-gray-600 mb-6">Add products to get started</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer whitespace-nowrap"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-3">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={onClose}
                    className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={onClose}
                      className="block"
                    >
                      <h4 className="text-sm font-medium text-[#2C2C2C] mb-1 line-clamp-2 hover:text-[#D32F2F] cursor-pointer">
                        {item.name}
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-500 mb-2">{item.model}</p>
                    <p className="text-base font-bold text-[#2C2C2C] mb-2">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-white cursor-pointer"
                        >
                          <i className="ri-subtract-line text-sm"></i>
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-white cursor-pointer"
                        >
                          <i className="ri-add-line text-sm"></i>
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#D32F2F] hover:text-[#B71C1C] cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {cartItems.length > 1 && (
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-[#D32F2F] hover:text-[#B71C1C] font-medium cursor-pointer whitespace-nowrap"
                >
                  Clear Cart
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-600">Subtotal:</span>
              <span className="text-2xl font-bold text-[#2C2C2C]">
                ₦{getTotalPrice().toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Checkout on WhatsApp
            </button>

            <Link
              to="/invoice?from=cart"
              className="w-full bg-[#D32F2F] text-white py-3 rounded-lg font-medium hover:bg-[#B71C1C] transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-file-text-line text-xl"></i>
              Generate Invoice
            </Link>

            <p className="text-xs text-gray-500 text-center">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </div>
        )}
      </div>
    </>
  );
}
