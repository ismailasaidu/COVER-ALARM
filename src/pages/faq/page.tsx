import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function FAQPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const openWhatsApp = () => {
    const phone = '15551234567';
    const message = encodeURIComponent('Hi, I have a question that is not covered in the FAQ.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: 'ri-question-line' },
    { id: 'products', name: 'Products', icon: 'ri-shopping-bag-3-line' },
    { id: 'installation', name: 'Installation', icon: 'ri-tools-line' },
    { id: 'technical', name: 'Technical', icon: 'ri-settings-3-line' },
    { id: 'ordering', name: 'Ordering', icon: 'ri-shopping-cart-line' },
    { id: 'support', name: 'Support', icon: 'ri-customer-service-2-line' }
  ];

  const faqs = [
    {
      category: 'products',
      question: 'What types of fire alarm systems do you sell?',
      answer: 'We supply a comprehensive range of fire alarm equipment including conventional and addressable control panels, smoke detectors, heat detectors, manual call points, sounders, sirens, fire alarm cables, and all necessary accessories.'
    },
    {
      category: 'products',
      question: 'What is the difference between conventional and addressable systems?',
      answer: 'Conventional systems divide a building into zones, with multiple detectors on each zone. When an alarm activates, you know which zone but not the exact detector. Addressable systems give each detector a unique address, allowing you to identify the exact location of an alarm. Addressable systems are more expensive but provide better information and are required for larger buildings.'
    },
    {
      category: 'installation',
      question: 'Can I install the fire alarm system myself?',
      answer: 'While some simple systems can be self-installed, we strongly recommend professional installation for complete fire alarm systems. This ensures proper system design, correct detector placement, and reliable operation. We can connect you with certified installers in your area.'
    },
    {
      category: 'installation',
      question: 'How many smoke detectors do I need for my building?',
      answer: 'The number depends on your building size, layout, ceiling height, and local regulations. As a general guide, one detector covers approximately 100m² in open areas. You will also need detectors in corridors, stairwells, and specific risk areas. Our technical team can help you calculate the exact requirements for your building.'
    },
    {
      category: 'installation',
      question: 'What type of cable should I use for fire alarm installation?',
      answer: 'Fire alarm systems require fire-resistant cables that maintain circuit integrity during a fire. We recommend FP200, FP200 Gold, or equivalent fire-resistant cables for most installations. The specific cable type depends on your system design and local regulations. Our team can advise on the correct specification.'
    },
    {
      category: 'technical',
      question: 'How often should fire alarm systems be tested?',
      answer: 'Regular testing is essential. We recommend: Weekly - test one call point and verify the alarm sounds; Monthly - full system test including all detectors and sounders; Annually - professional inspection and servicing by a qualified technician. Keep detailed records of all tests as required by regulations.'
    },
    {
      category: 'technical',
      question: 'What causes false alarms and how can I prevent them?',
      answer: 'Common causes include dust accumulation, steam from kitchens or bathrooms, aerosol sprays, and incorrect detector placement. Prevention: regular cleaning and maintenance, use heat detectors in kitchens, avoid placing detectors near bathrooms or air vents, and ensure proper detector selection for each area.'
    },
    {
      category: 'technical',
      question: 'How long do fire alarm detectors last?',
      answer: 'Most smoke and heat detectors have a lifespan of 10 years, after which they should be replaced regardless of apparent functionality. Control panels typically last 15-20 years with proper maintenance. Always check manufacturer specifications and replace components at the end of their rated life.'
    },
    {
      category: 'ordering',
      question: 'How do I place an order?',
      answer: 'Simply browse our products and click "Order on WhatsApp" on any product page. This will open WhatsApp with the product details pre-filled. You can also contact us directly via WhatsApp, phone, or email with your requirements. For bulk orders, we can provide custom quotes.'
    },
    {
      category: 'ordering',
      question: 'Do you offer bulk discounts for large projects?',
      answer: 'Yes, we offer competitive pricing for bulk orders and large projects. Contact our sales team with your project requirements and quantities, and we will provide a custom quote. We work with contractors, facility managers, and developers on projects of all sizes.'
    },
    {
      category: 'ordering',
      question: 'What are your delivery times?',
      answer: 'In-stock items are dispatched the same day if ordered before 2 PM. Standard delivery takes 2-3 business days. For urgent orders, express delivery options are available. Large bulk orders may require additional lead time, which we will confirm when you place your order.'
    },
    {
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including bank transfer, credit/debit cards, and for established business customers, we can arrange account terms. Payment details will be provided when you place your order via WhatsApp or contact our sales team.'
    },
    {
      category: 'support',
      question: 'Do you provide technical support after purchase?',
      answer: 'Yes, we provide comprehensive technical support for all products we sell. Our team of fire safety engineers can assist with installation guidance, system configuration, troubleshooting, and maintenance advice. Support is available via WhatsApp, phone, and email.'
    },
    {
      category: 'support',
      question: 'What warranty do your products come with?',
      answer: 'All products come with the manufacturer warranty, typically ranging from 2-5 years depending on the product type. We provide full warranty documentation with every purchase and will assist with any warranty claims. Extended warranty options may be available for certain products.'
    },
    {
      category: 'support',
      question: 'Can you help with system design and planning?',
      answer: 'Absolutely. Our technical team can assist with fire alarm system design, detector placement planning, cable routing, and system specifications. For complex projects, we can provide detailed system design drawings. Contact us with your building plans and requirements.'
    },
    {
      category: 'support',
      question: 'Do you offer installation services?',
      answer: 'While we focus on supplying equipment, we work with a network of certified fire alarm installers across the region. We can connect you with qualified professionals in your area who can handle installation, commissioning, and setup of your fire alarm system.'
    }
  ];

  // SEO Configuration with FAQPage Schema
  useSEO({
    title: 'Fire Safety Equipment FAQ - FireAlarm.ng | Common Questions Answered',
    description: 'Find answers to frequently asked questions about fire alarm systems, smoke detectors, installation, maintenance, and ordering from FireAlarm.ng. Expert guidance on fire safety equipment for Nigerian businesses and homes.',
    keywords: 'fire alarm FAQ Nigeria, fire safety questions, fire extinguisher installation guide, smoke detector maintenance, fire alarm system Nigeria, fire safety equipment help',
    canonical: `${siteUrl}/faq`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${siteUrl}/faq#faqpage`,
      url: `${siteUrl}/faq`,
      name: 'Fire Safety Equipment FAQ',
      description: 'Frequently asked questions about fire safety equipment and services',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  });

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[140px] md:pt-[148px] pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">Frequently Asked Questions</h1>
            <div className="w-16 md:w-20 h-1 bg-[#D32F2F] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our fire alarm products, installation, technical support, and ordering process.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 md:gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-[#F5F5F5] text-[#2C2C2C] hover:bg-gray-200'
                }`}
              >
                <i className={`${category.icon} text-sm md:text-base`}></i>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-20">
            <div className="space-y-3 md:space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg md:rounded-xl overflow-hidden hover:border-[#D32F2F] transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left cursor-pointer"
                  >
                    <h3 className="text-sm md:text-lg font-bold text-[#2C2C2C] pr-3 md:pr-4">{faq.question}</h3>
                    <i
                      className={`ri-arrow-down-s-line text-xl md:text-2xl text-[#D32F2F] flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-xs md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-book-open-line text-2xl md:text-3xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Installation Guides</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Detailed step-by-step guides for installing fire alarm systems
              </p>
              <Button size="sm" variant="outline" onClick={() => window.location.href = '/support'}>
                View Guides
              </Button>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-file-list-3-line text-2xl md:text-3xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Product Datasheets</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Technical specifications and documentation for all products
              </p>
              <Button size="sm" variant="outline" onClick={openWhatsApp}>
                Request Documents
              </Button>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-shopping-bag-3-line text-2xl md:text-3xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Browse Products</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Explore our complete range of fire alarm equipment
              </p>
              <Button size="sm" variant="outline" onClick={() => window.location.href = '/shop'}>
                View Products
              </Button>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="bg-[#D32F2F] rounded-xl p-6 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Still Have Questions?</h2>
            <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us via WhatsApp for instant answers to your fire safety questions.
            </p>
            <Button size="lg" variant="secondary" onClick={openWhatsApp}>
              <i className="ri-whatsapp-line mr-2"></i>
              Chat With Our Team
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}