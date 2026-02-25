import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';
import { allProducts, productDetail } from '../../mocks/products';
import { useSEO } from '../../utils/seo';

export default function ProductPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id || '0'));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Use product if found, otherwise fall back to productDetail
  const currentProduct = product || productDetail;
  const relatedProducts = allProducts.filter(p => 
    currentProduct.relatedProducts?.includes(p.id)
  ).slice(0, 4);

  // SEO Configuration
  useSEO({
    title: `${currentProduct.name} - ${currentProduct.brand} | Buy Online at FireAlarm.ng`,
    description: `Buy ${currentProduct.name} online in Nigeria. ${currentProduct.description?.substring(0, 150)}... ₦${currentProduct.price.toLocaleString()}. In stock with fast nationwide delivery. ISO/CE certified.`,
    keywords: `${currentProduct.name}, ${currentProduct.brand} Nigeria, ${currentProduct.category} Nigeria, buy ${currentProduct.model}, fire safety equipment Nigeria`,
    canonical: `${siteUrl}/product/${currentProduct.id}`,
    ogType: 'product',
    ogImage: currentProduct.image,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${siteUrl}/product/${currentProduct.id}#product`,
      name: currentProduct.name,
      description: currentProduct.description,
      image: currentProduct.images || [currentProduct.image],
      brand: {
        '@type': 'Brand',
        name: currentProduct.brand
      },
      sku: currentProduct.model,
      mpn: currentProduct.model,
      offers: {
        '@type': 'Offer',
        url: `${siteUrl}/product/${currentProduct.id}`,
        priceCurrency: 'NGN',
        price: currentProduct.price,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        availability: currentProduct.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'FireAlarm.ng'
        }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: currentProduct.rating,
        reviewCount: currentProduct.reviews,
        bestRating: '5',
        worstRating: '1'
      },
      category: currentProduct.category
    }
  });

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAdding(true);
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        model: product.model,
        price: product.price,
        image: product.images[0],
        quantity
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

  const handleViewCart = () => {
    window.dispatchEvent(new CustomEvent('openCart'));
    setShowToast(false);
  };

  const handleWhatsAppOrder = () => {
    if (!product) return;

    const phoneNumber = '2348145540554';
    const message = `Hi! I'm interested in:\n\n${product.name}\nModel: ${product.model}\nQuantity: ${quantity}\nPrice: ₦${(product.price * quantity).toLocaleString()}\n\nPlease confirm availability and delivery details.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsAppInquiry = () => {
    const phoneNumber = '2348145540554';
    const message = encodeURIComponent(
      `Hi! I have a question about:\n\n${currentProduct.name}\nModel: ${currentProduct.model}\n\nCould you please provide more information?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  useEffect(() => {
    if (product) {
      // Check if product is in wishlist
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
      
      // Check if product is in comparison
      const comparison = JSON.parse(localStorage.getItem('comparison') || '[]');
      setIsCompared(comparison.includes(product.id));
    }
  }, [product]);

  const handleWishlistToggle = () => {
    if (!product) return;
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let newWishlist;
    let message;
    
    if (wishlist.includes(product.id)) {
      newWishlist = wishlist.filter((id: number) => id !== product.id);
      message = 'Removed from wishlist';
      setIsWishlisted(false);
    } else {
      newWishlist = [...wishlist, product.id];
      message = 'Added to wishlist';
      setIsWishlisted(true);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setToastMessage(message);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleCompareToggle = () => {
    if (!product) return;
    
    const comparison = JSON.parse(localStorage.getItem('comparison') || '[]');
    let newComparison;
    let message;
    
    if (comparison.includes(product.id)) {
      newComparison = comparison.filter((id: number) => id !== product.id);
      message = 'Removed from comparison';
      setIsCompared(false);
    } else {
      newComparison = [...comparison, product.id];
      message = 'Added to comparison';
      setIsCompared(true);
    }
    
    localStorage.setItem('comparison', JSON.stringify(newComparison));
    setToastMessage(message);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // If no product found, show error
  if (!currentProduct) {
    return (
      <>
        <Header />
        <main className="pt-[140px] md:pt-[180px] min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-[#D32F2F]/20 to-[#FF9800]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-error-warning-line text-6xl text-[#D32F2F]"></i>
            </div>
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-3">Product Not Found</h2>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop" className="inline-block px-8 py-4 bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white rounded-xl font-semibold hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-[140px] md:pt-[148px] min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D32F2F]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF9800]/5 to-transparent rounded-full blur-3xl"></div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-24 md:top-32 right-4 z-50 animate-slide-in-right">
            <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1a1a1a] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10">
              <i className={`${
                toastMessage.includes('wishlist') 
                  ? (isWishlisted ? 'ri-heart-fill text-[#D32F2F]' : 'ri-heart-line')
                  : (isCompared ? 'ri-scales-fill text-[#D32F2F]' : 'ri-scales-line')
              } text-xl`}></i>
              <span className="text-sm font-semibold">{toastMessage}</span>
            </div>
          </div>
        )}

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-12 relative z-10">
          {/* Breadcrumb with Gradient */}
          <div className="flex items-center gap-2 text-sm lg:text-sm text-xs text-gray-600 mb-8 lg:mb-8 mb-6 overflow-x-auto whitespace-nowrap animate-fade-in">
            <Link to="/" className="hover:text-[#D32F2F] cursor-pointer transition-colors">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/shop" className="hover:text-[#D32F2F] cursor-pointer transition-colors">Shop</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to={`/shop?category=${currentProduct.category}`} className="hover:text-[#D32F2F] cursor-pointer transition-colors">{currentProduct.category}</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-[#2C2C2C] font-semibold">{currentProduct.subcategory || currentProduct.category}</span>
          </div>

          {/* Product Detail Section */}
          <div className="grid grid-cols-12 lg:gap-8 gap-0 mb-16 lg:mb-16 mb-12">
            {/* Left: Images */}
            <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0 animate-fade-in">
              <div className="lg:sticky lg:top-[200px]">
                <div className="aspect-square bg-white border-2 border-transparent bg-gradient-to-br from-[#D32F2F]/5 to-[#FF9800]/5 rounded-2xl mb-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <img
                    src={currentProduct.images?.[selectedImage] || currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain p-8 lg:p-8 p-4 transition-transform hover:scale-105"
                  />
                </div>
                {currentProduct.images && currentProduct.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 lg:gap-3 gap-2">
                    {currentProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square border-2 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                          selectedImage === index 
                            ? 'border-[#D32F2F] shadow-lg ring-2 ring-[#D32F2F]/20' 
                            : 'border-gray-200 hover:border-[#D32F2F]/50'
                        }`}
                      >
                        <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-contain p-2 lg:p-2 p-1" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center: Product Info */}
            <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-3xl lg:text-3xl text-2xl font-bold text-[#2C2C2C] mb-2">{currentProduct.name}</h1>
              <p className="text-sm text-gray-500 mb-4">Model: <span className="font-semibold">{currentProduct.model}</span></p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${
                        i < Math.floor(currentProduct.rating) ? 'ri-star-fill text-[#FF9800]' : 'ri-star-line text-gray-300'
                      } text-lg lg:text-lg text-base`}
                    ></i>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#2C2C2C]">{currentProduct.rating}</span>
                <span className="text-sm text-gray-500">({currentProduct.reviews} reviews)</span>
              </div>

              {/* Price with Gradient */}
              <div className="flex items-baseline gap-3 mb-6 p-4 bg-gradient-to-r from-[#D32F2F]/5 to-[#FF9800]/5 rounded-xl border-2 border-[#D32F2F]/10">
                <span className="text-4xl lg:text-4xl text-3xl font-bold bg-gradient-to-r from-[#D32F2F] to-[#FF5722] bg-clip-text text-transparent">₦{currentProduct.price.toLocaleString()}</span>
                {currentProduct.originalPrice && (
                  <span className="text-xl lg:text-xl text-lg text-gray-400 line-through">₦{currentProduct.originalPrice.toLocaleString()}</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="w-3 h-3 rounded-full bg-[#4CAF50] animate-pulse"></div>
                <span className="text-sm font-semibold text-[#4CAF50]">In Stock</span>
                {currentProduct.stockQuantity && (
                  <span className="text-sm text-gray-600">({currentProduct.stockQuantity} units available)</span>
                )}
              </div>

              {/* Key Features */}
              {currentProduct.keyFeatures && (
                <div className="mb-6 p-5 bg-white rounded-xl border-2 border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-lg flex items-center justify-center">
                      <i className="ri-star-line text-white text-sm"></i>
                    </div>
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {currentProduct.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="ri-check-line text-[#4CAF50] text-lg mt-0.5 flex-shrink-0"></i>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-3">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#D32F2F] hover:to-[#FF5722] hover:text-white hover:border-transparent cursor-pointer transition-all"
                  >
                    <i className="ri-subtract-line text-lg"></i>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 h-12 border-2 border-gray-300 rounded-xl text-center font-bold text-lg focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/20 outline-none transition-all"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(currentProduct.stockQuantity || 999, quantity + 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#D32F2F] hover:to-[#FF5722] hover:text-white hover:border-transparent cursor-pointer transition-all"
                  >
                    <i className="ri-add-line text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`w-full py-4 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
                    isAdding
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : 'bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white'
                  }`}
                >
                  <i className={`text-xl ${isAdding ? 'ri-check-line' : 'ri-shopping-cart-line'}`}></i>
                  {isAdding ? 'Added to Cart!' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  Order on WhatsApp
                </button>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 bg-white text-[#2C2C2C] border-2 border-gray-300 rounded-xl text-base font-semibold hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all cursor-pointer whitespace-nowrap"
                >
                  Ask a Question
                </button>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b-2 border-gray-100">
                <button
                  onClick={handleWishlistToggle}
                  className="flex items-center gap-2 text-sm font-medium hover:text-[#D32F2F] transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-red-50"
                  style={{ color: isWishlisted ? '#D32F2F' : '#6B7280' }}
                >
                  <i className={`${isWishlisted ? 'ri-heart-fill text-[#D32F2F]' : 'ri-heart-line'} text-lg`}></i>
                  <span className="hidden sm:inline">{isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                  <span className="sm:hidden">{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
                </button>
                <button 
                  onClick={handleCompareToggle}
                  className="flex items-center gap-2 text-sm font-medium hover:text-[#D32F2F] cursor-pointer whitespace-nowrap transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
                  style={{ color: isCompared ? '#D32F2F' : '#6B7280' }}
                >
                  <i className={`${isCompared ? 'ri-scales-fill' : 'ri-scales-line'}`}></i>
                  <span className="hidden sm:inline">{isCompared ? 'Remove from Compare' : 'Add to Compare'}</span>
                  <span className="sm:hidden">{isCompared ? 'In Comparison' : 'Compare'}</span>
                </button>
              </div>

              {/* Trust Badges */}
              {currentProduct.certifications && (
                <div className="flex items-center gap-3 lg:gap-3 gap-2 mb-4 flex-wrap">
                  {currentProduct.certifications.map((cert, index) => (
                    <div key={index} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg text-xs font-bold text-gray-700 border border-gray-200">
                      {cert}
                    </div>
                  ))}
                </div>
              )}

              {/* Delivery Info */}
              <div className="bg-gradient-to-r from-[#D32F2F]/5 to-[#FF9800]/5 rounded-xl p-5 border-2 border-[#D32F2F]/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-truck-line text-xl text-white"></i>
                  </div>
                  <span className="text-sm font-bold text-[#2C2C2C]">Estimated Delivery: 2-3 business days</span>
                </div>
                <p className="text-xs text-gray-600 ml-13">Free shipping on orders over ₦200,000</p>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="col-span-12 lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="lg:sticky lg:top-[200px] space-y-4">
                {/* Specifications Card */}
                {currentProduct.specifications && (
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all">
                    <h3 className="text-sm font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                      <i className="ri-file-list-3-line text-[#D32F2F]"></i>
                      Quick Specifications
                    </h3>
                    <div className="space-y-3 text-xs">
                      {Object.entries(currentProduct.specifications).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="flex justify-between gap-2 p-2 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 font-medium">{key}:</span>
                          <span className="font-bold text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compatibility Card */}
                {currentProduct.compatibility && (
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all">
                    <h3 className="text-sm font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-[#4CAF50]"></i>
                      Compatibility
                    </h3>
                    <ul className="space-y-2 text-xs">
                      {currentProduct.compatibility.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start gap-2 p-2 bg-green-50 rounded-lg">
                          <i className="ri-check-line text-[#4CAF50] mt-0.5 flex-shrink-0"></i>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warranty Card */}
                {currentProduct.warranty && (
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all">
                    <h3 className="text-sm font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                      <i className="ri-shield-check-line text-[#D32F2F]"></i>
                      Warranty & Returns
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div className="flex items-start gap-2 p-2 bg-red-50 rounded-lg">
                        <i className="ri-shield-check-line text-[#D32F2F] mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700 font-medium">{currentProduct.warranty}</span>
                      </div>
                      <div className="flex items-start gap-2 p-2 bg-blue-50 rounded-lg">
                        <i className="ri-arrow-go-back-line text-blue-600 mt-0.5 flex-shrink-0"></i>
                        <span className="text-gray-700 font-medium">30-day return policy</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Support Card */}
                <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-sm font-bold mb-2">Need Help?</h3>
                  <p className="text-xs mb-4 opacity-90">Chat with us on WhatsApp</p>
                  <div className="flex items-center gap-2 mb-4 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <i className="ri-whatsapp-line flex-shrink-0 text-lg"></i>
                    <span className="text-sm font-bold">+234 814 554 0554</span>
                  </div>
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-3 bg-white text-[#25D366] rounded-lg text-sm font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Content */}
          {(currentProduct.description || currentProduct.specifications || currentProduct.useCase) && (
            <div className="mb-16 lg:mb-16 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="border-b-2 border-gray-200 mb-8">
                <div className="flex gap-8 lg:gap-8 gap-4 overflow-x-auto">
                  {['description', 'specifications', 'installation', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 text-sm font-bold capitalize cursor-pointer whitespace-nowrap transition-all ${
                        activeTab === tab
                          ? 'text-[#D32F2F] border-b-4 border-[#D32F2F]'
                          : 'text-gray-600 hover:text-[#2C2C2C]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl lg:text-2xl text-xl font-bold text-[#2C2C2C] mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{currentProduct.description}</p>
                  {currentProduct.useCase && (
                    <>
                      <h4 className="text-xl lg:text-xl text-lg font-bold text-[#2C2C2C] mb-3">Use Case</h4>
                      <p className="text-gray-700 leading-relaxed">{currentProduct.useCase}</p>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'specifications' && currentProduct.specifications && (
                <div>
                  <h3 className="text-2xl lg:text-2xl text-xl font-bold text-[#2C2C2C] mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {Object.entries(currentProduct.specifications).map(([key, value]) => (
                      <div key={key} className="bg-[#F5F5F5] rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">{key}</div>
                        <div className="text-base font-medium text-[#2C2C2C]">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'installation' && (
                <div>
                  <h3 className="text-2xl lg:text-2xl text-xl font-bold text-[#2C2C2C] mb-6">Installation Guide</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-[#2C2C2C] mb-3">Step 1: Preparation</h4>
                      <p className="text-gray-700">Ensure power to the fire alarm system is disconnected. Verify compatibility with your existing control panel.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2C2C2C] mb-3">Step 2: Mounting</h4>
                      <p className="text-gray-700">Install the mounting base on the ceiling or wall using appropriate fixings. Ensure the surface is clean and level.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2C2C2C] mb-3">Step 3: Wiring</h4>
                      <p className="text-gray-700">Connect wiring according to the system diagram. Follow local electrical codes and regulations.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2C2C2C] mb-3">Step 4: Testing</h4>
                      <p className="text-gray-700">After installation, conduct a full system test to verify proper operation. Document the installation date.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
                    <h3 className="text-2xl lg:text-2xl text-xl font-bold text-[#2C2C2C]">Customer Reviews</h3>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                      Write a Review
                    </button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#2C2C2C] mb-2">{currentProduct.rating}</div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-[#FF9800] text-lg"></i>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{currentProduct.reviews} reviews</div>
                    </div>
                    <div className="lg:col-span-2 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-12">{stars} star</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#FF9800]"
                              style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">{stars === 5 ? 75 : stars === 4 ? 20 : 5}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="ri-user-line text-gray-600"></i>
                          </div>
                          <div>
                            <div className="font-medium text-[#2C2C2C]">John Smith</div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className="ri-star-fill text-[#FF9800] text-sm"></i>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          Excellent product! Easy to install and works perfectly with our existing system. The dual-sensor technology has significantly reduced false alarms.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl lg:text-3xl text-2xl font-bold text-[#2C2C2C] mb-8 lg:mb-8 mb-6">Customers Also Bought</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 gap-4" data-product-shop>
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-center gap-4 animate-slide-up max-w-sm">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-check-line text-2xl text-green-600"></i>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#2C2C2C] mb-1">Added to Cart!</p>
            <p className="text-xs text-gray-600 line-clamp-1">{currentProduct.name}</p>
          </div>
          <button
            onClick={handleViewCart}
            className="px-4 py-2 bg-[#D32F2F] text-white text-sm font-medium rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer whitespace-nowrap"
          >
            View Cart
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}