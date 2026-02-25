import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function SupportPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  // SEO Configuration
  useSEO({
    title: 'Fire Safety Installation & Support - Expert Technical Guidance | FireAlarm.ng',
    description: 'Professional fire alarm installation support and technical guidance from FireAlarm.ng. Get expert help with system design, detector placement, wiring, commissioning, and maintenance. 24/7 technical support for all fire safety equipment across Nigeria.',
    keywords: 'fire alarm installation Nigeria, fire safety technical support, smoke detector installation guide, fire alarm system setup, fire safety maintenance Nigeria, fire alarm troubleshooting',
    canonical: `${siteUrl}/support`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/support#webpage`,
      url: `${siteUrl}/support`,
      name: 'Installation & Support',
      description: 'Expert technical support and installation guidance for fire safety equipment',
      provider: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'FireAlarm.ng'
      }
    }
  });

  const openWhatsApp = (topic: string) => {
    const phone = '2348145540554';
    const message = encodeURIComponent(`Hi, I need help with: ${topic}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const supportCategories = [
    {
      title: 'Installation Guidance',
      icon: 'ri-tools-line',
      description: 'Step-by-step installation support for all fire alarm systems',
      topics: [
        'Control panel installation',
        'Detector placement guidelines',
        'Wiring and cable routing',
        'System commissioning'
      ]
    },
    {
      title: 'Technical Support',
      icon: 'ri-customer-service-2-line',
      description: 'Expert assistance with system configuration and troubleshooting',
      topics: [
        'System programming',
        'Fault diagnosis',
        'Compatibility questions',
        'Performance optimization'
      ]
    },
    {
      title: 'Product Selection',
      icon: 'ri-shopping-bag-3-line',
      description: 'Help choosing the right equipment for your specific needs',
      topics: [
        'Building assessment',
        'System design consultation',
        'Product recommendations',
        'Compliance requirements'
      ]
    },
    {
      title: 'Maintenance &amp; Testing',
      icon: 'ri-settings-3-line',
      description: 'Guidance on maintaining and testing your fire alarm system',
      topics: [
        'Regular maintenance schedules',
        'Testing procedures',
        'Replacement parts',
        'System upgrades'
      ]
    }
  ];

  const installationGuides = [
    {
      title: 'Control Panel Installation',
      duration: '45 min read',
      icon: 'ri-dashboard-line',
      topics: ['Mounting requirements', 'Power supply connection', 'Zone configuration', 'Initial programming']
    },
    {
      title: 'Smoke Detector Setup',
      duration: '30 min read',
      icon: 'ri-alarm-warning-line',
      topics: ['Optimal placement', 'Wiring connections', 'Sensitivity adjustment', 'Testing procedures']
    },
    {
      title: 'System Commissioning',
      duration: '60 min read',
      icon: 'ri-checkbox-circle-line',
      topics: ['Pre-commissioning checks', 'System testing', 'Documentation', 'Handover procedures']
    },
    {
      title: 'Maintenance Guide',
      duration: '40 min read',
      icon: 'ri-tools-fill',
      topics: ['Weekly checks', 'Monthly testing', 'Annual servicing', 'Record keeping']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[140px] md:pt-[148px] pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">Installation &amp; Support</h1>
            <div className="w-20 h-1 bg-[#D32F2F] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Expert technical support and comprehensive installation guidance to ensure your fire alarm system is installed correctly and performs reliably.
            </p>
          </div>

          {/* Quick Contact Banner */}
          <div className="bg-[#D32F2F] rounded-xl p-6 md:p-10 mb-12 md:mb-20 text-white">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">24/7</div>
                <div className="text-xs md:text-lg">Technical Support</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">&lt;2hrs</div>
                <div className="text-xs md:text-lg">Average Response Time</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-lg">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Support Categories */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] text-center mb-8 md:mb-12">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {supportCategories.map((category, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F] rounded-lg flex items-center justify-center">
                      <i className={`${category.icon} text-2xl md:text-3xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-2 md:mb-3">{category.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{category.description}</p>
                      <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                        {category.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                            <i className="ri-check-line text-[#D32F2F]"></i>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={`https://wa.me/2348145540554?text=${encodeURIComponent('Hi! I need technical support.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                      >
                        <i className="ri-whatsapp-line text-xl"></i>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Guides */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] text-center mb-8 md:mb-12">Installation Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {installationGuides.map((guide, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:border-[#D32F2F] transition-colors cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <i className={`${guide.icon} text-xl md:text-2xl text-[#D32F2F]`}></i>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">{guide.title}</h3>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <i className="ri-time-line"></i>
                    <span>{guide.duration}</span>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                    {guide.topics.map((topic, idx) => (
                      <div key={idx} className="text-xs md:text-sm text-gray-600">
                        • {topic}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => openWhatsApp(`Installation guide: ${guide.title}`)}
                    className="text-xs md:text-sm text-[#D32F2F] font-medium hover:underline cursor-pointer whitespace-nowrap"
                  >
                    Request Guide <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Process */}
          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-12 mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#2C2C2C] text-center mb-8 md:mb-12">Professional Installation Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Site Survey', desc: 'Assess building layout and requirements' },
                { step: '2', title: 'System Design', desc: 'Create compliant fire alarm design' },
                { step: '3', title: 'Equipment Install', desc: 'Mount and wire all components' },
                { step: '4', title: 'Programming', desc: 'Configure system settings' },
                { step: '5', title: 'Testing', desc: 'Verify full system operation' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-white text-xl md:text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-1.5 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4 md:mb-6">Common Installation Questions</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">
                    <i className="ri-question-line text-[#D32F2F] mr-2"></i>
                    How many detectors do I need?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 pl-6 md:pl-8">
                    The number depends on your building size, layout, and local regulations. Generally, one detector per 100m² for open areas, with additional units in corridors and stairwells.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">
                    <i className="ri-question-line text-[#D32F2F] mr-2"></i>
                    Can I install the system myself?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 pl-6 md:pl-8">
                    While some components can be self-installed, we recommend professional installation for complete systems to ensure compliance and proper operation. We can connect you with certified installers.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">
                    <i className="ri-question-line text-[#D32F2F] mr-2"></i>
                    What cable type should I use?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 pl-6 md:pl-8">
                    Fire alarm cables must be fire-resistant. We recommend FP200 or equivalent for most installations. Our team can advise on the correct specification for your project.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">
                    <i className="ri-question-line text-[#D32F2F] mr-2"></i>
                    How often should systems be tested?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 pl-6 md:pl-8">
                    Weekly call point tests, monthly full system tests, and annual professional servicing are standard requirements. We provide detailed testing schedules with all systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20fire%20safety%20technician%20installing%20fire%20alarm%20control%20panel%20on%20wall%20using%20tools%20modern%20building%20interior%20technical%20work%20professional%20photography%20bright%20lighting%20installation%20process&width=800&height=900&seq=support1&orientation=portrait"
                alt="Installation Support"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Support Resources */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:border-[#D32F2F] transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-file-text-line text-2xl md:text-3xl text-[#D32F2F]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Technical Datasheets</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Detailed specifications and installation instructions for all products
              </p>
              <Button size="sm" variant="outline" onClick={() => openWhatsApp('Technical datasheets')}>
                Request Documents
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:border-[#D32F2F] transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-video-line text-2xl md:text-3xl text-[#D32F2F]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Video Tutorials</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Step-by-step video guides for installation and configuration
              </p>
              <Button size="sm" variant="outline" onClick={() => openWhatsApp('Video tutorials')}>
                Access Videos
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:border-[#D32F2F] transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="ri-team-line text-2xl md:text-3xl text-[#D32F2F]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] mb-2 md:mb-3">Installer Network</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Connect with certified fire alarm installers in your area
              </p>
              <Button size="sm" variant="outline" onClick={() => openWhatsApp('Installer recommendations')}>
                Find Installer
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#D32F2F] rounded-xl p-6 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Technical Assistance?</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Our team of certified fire safety engineers is ready to help with installation guidance, troubleshooting, and technical questions.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => openWhatsApp('Technical assistance')}
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Contact Technical Support
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}