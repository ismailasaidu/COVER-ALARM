import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProductCard from '../../components/feature/ProductCard';
import { allProducts } from '../../mocks/products';
import { useSEO } from '../../utils/seo';

export default function ShopPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search');
  const categoryParam = searchParams.get('category');

  // SEO Configuration
  useSEO({
    title: 'Shop Fire Safety Equipment Online - Certified Products | FireAlarm.ng',
    description: 'Browse and buy certified fire safety equipment online in Nigeria. Fire extinguishers, smoke detectors, alarm systems, emergency lights, hose reels & more. ISO/CE/NFEC certified. Nationwide delivery to all 36 states. Shop now!',
    keywords: 'buy fire safety equipment Nigeria, fire extinguisher online Nigeria, smoke detector price Nigeria, fire alarm system shop, emergency lights Nigeria, fire safety products online',
    canonical: `${siteUrl}/shop`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/shop#collectionpage`,
      url: `${siteUrl}/shop`,
      name: 'Shop Fire Safety Equipment',
      description: 'Browse our complete range of certified fire safety equipment',
      provider: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'FireAlarm.ng'
      }
    }
  });

  const [sortBy, setSortBy] = useState('best-match');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  let filteredProducts = allProducts;

  // Apply category filter if exists
  if (categoryParam) {
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase() === categoryParam.toLowerCase()
    );
  }

  // Apply search filter if exists
  if (searchParam) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      product.category.toLowerCase().includes(searchParam.toLowerCase())
    );
  }

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="pt-[140px] md:pt-[148px] min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D32F2F]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF9800]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-12 relative z-10">
          {/* Page Header with Gradient */}
          <div className="mb-8 md:mb-12 text-center animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white text-sm font-semibold rounded-full shadow-lg">
                Premium Fire Safety Equipment
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4 bg-gradient-to-r from-[#2C2C2C] to-[#D32F2F] bg-clip-text text-transparent">
              Shop All Products
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete range of certified fire safety equipment with nationwide delivery
            </p>
          </div>

          {/* Toolbar with Gradient Border */}
          <div className="bg-white rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#D32F2F]/10 via-transparent to-[#FF9800]/10 p-[2px] mb-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D32F2F] to-[#FF5722] rounded-lg flex items-center justify-center">
                  <i className="ri-shopping-bag-3-line text-white text-xl"></i>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#2C2C2C]">{sortedProducts.length}</span>
                  <span className="text-sm text-gray-600 ml-2">products available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent cursor-pointer transition-all hover:border-[#D32F2F]/30"
                >
                  <option value="best-match">Best Match</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* View Toggle - Hidden on mobile */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-white'
                    }`}
                  >
                    <i className="ri-grid-line text-lg"></i>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      viewMode === 'list' 
                        ? 'bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-white'
                    }`}
                  >
                    <i className="ri-list-check text-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {currentProducts.length > 0 ? (
            <>
              <div className={`
                grid gap-4 md:gap-6 mb-8
                ${viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
                }
              `} data-product-shop>
                {currentProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              {/* Pagination with Gradient */}
              {totalPages > 1 && (
                <div className="bg-white rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#D32F2F]/10 via-transparent to-[#FF9800]/10 p-[2px] shadow-lg">
                  <div className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm font-medium text-gray-600 text-center sm:text-left">
                      Showing <span className="text-[#D32F2F] font-bold">{startIndex + 1}-{Math.min(endIndex, sortedProducts.length)}</span> of <span className="text-[#D32F2F] font-bold">{sortedProducts.length}</span> products
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm font-medium hover:border-[#D32F2F] hover:text-[#D32F2F] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap transition-all"
                      >
                        <i className="ri-arrow-left-s-line"></i>
                        <span className="hidden sm:inline ml-1">Previous</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(page => {
                            if (totalPages <= 5) return true;
                            if (page === 1 || page === totalPages) return true;
                            if (page >= currentPage - 1 && page <= currentPage + 1) return true;
                            return false;
                          })
                          .map((page, index, array) => (
                            <div key={page} className="flex items-center gap-1">
                              {index > 0 && array[index - 1] !== page - 1 && (
                                <span className="px-2 text-gray-400">...</span>
                              )}
                              <button
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                                  currentPage === page
                                    ? 'bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white shadow-lg scale-110'
                                    : 'border-2 border-gray-200 hover:border-[#D32F2F] hover:text-[#D32F2F]'
                                }`}
                              >
                                {page}
                              </button>
                            </div>
                          ))}
                      </div>

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm font-medium hover:border-[#D32F2F] hover:text-[#D32F2F] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap transition-all"
                      >
                        <span className="hidden sm:inline mr-1">Next</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D32F2F]/20 to-[#FF9800]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-inbox-line text-6xl text-[#D32F2F]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">No products found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search terms or browse all products</p>
              <Link
                to="/shop"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white rounded-xl font-semibold hover:shadow-xl transition-all cursor-pointer whitespace-nowrap transform hover:scale-105"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
