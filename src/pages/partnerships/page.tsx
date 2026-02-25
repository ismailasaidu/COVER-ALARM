import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function PartnershipsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const [activeProgram, setActiveProgram] = useState<string>('asset-shield');
  const [currentSlide, setCurrentSlide] = useState(0);

  // SEO Configuration
  useSEO({
    title: 'Strategic Partnerships - Enterprise Fire Safety Solutions | FireAlarm.ng',
    description: 'Partner with FireAlarm.ng for enterprise fire safety solutions. Asset Shield™ for insurance & banks, Forever FireShield™ for military, government facility protection, and market fire prevention programs. 24/7 monitoring, rapid response, and revenue-sharing partnerships across Nigeria.',
    keywords: 'fire safety partnerships Nigeria, insurance fire protection, bank asset protection, government fire safety, military fire systems, market fire prevention, enterprise fire solutions Nigeria, fire monitoring systems, rapid response fire services',
    canonical: `${siteUrl}/partnerships`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/partnerships#webpage`,
      url: `${siteUrl}/partnerships`,
      name: 'Strategic Partnerships - Enterprise Fire Safety Solutions',
      description: 'Enterprise fire safety partnership programs for insurance, banks, government, military, and commercial markets',
      provider: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'FireAlarm.ng'
      }
    }
  });

  const heroSlides = [
    {
      title: 'Enterprise Fire Safety Solutions',
      subtitle: 'Partner with Nigeria\'s leading fire safety provider. Revenue-sharing programs for insurance, banks, government, military, and commercial markets.',
      image: 'modern corporate partnership handshake fire safety technology monitoring screens professional business environment high quality photography dramatic lighting simple background',
      badge: 'Strategic Partnerships'
    },
    {
      title: 'Asset Shield™ for Insurance & Banks',
      subtitle: 'Reduce fire losses by 85% and increase premium revenue with 24/7 monitored fire protection systems for your clients.',
      image: 'modern insurance office building with fire protection systems security monitoring screens professional corporate environment high quality photography bright lighting simple background',
      badge: 'Insurance Solutions'
    },
    {
      title: 'Government & Military Protection',
      subtitle: 'Comprehensive fire safety for schools, hospitals, ministries, military facilities, and public infrastructure across Nigeria.',
      image: 'modern government building with fire safety systems emergency response vehicles professional photography bright daylight Nigerian architecture simple background',
      badge: 'Public Sector'
    },
    {
      title: 'Market Shield™ Programs',
      subtitle: 'Complete fire prevention programs for markets, malls, and commercial hubs. Protecting traders and preventing devastating market fires.',
      image: 'busy Nigerian market with modern fire safety equipment fire extinguishers smoke detectors professional photography vibrant commercial activity safety systems visible simple background',
      badge: 'Commercial Markets'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const openWhatsApp = (program: string) => {
    const phone = '2348145540554';
    const message = encodeURIComponent(`Hi, I'm interested in the ${program} partnership program. Please provide more details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const programs = [
    {
      id: 'asset-shield',
      name: 'Asset Shield™',
      tagline: 'For Insurance Companies & Banks',
      icon: 'ri-shield-check-line',
      color: '#D32F2F',
      description: 'Reduce fire losses and increase premium revenue with 24/7 monitored fire protection systems',
      image: 'modern insurance office building with fire protection systems security monitoring screens professional corporate environment high quality photography dramatic lighting'
    },
    {
      id: 'government',
      name: 'Government Protection',
      tagline: 'For Public Facilities & NEMA',
      icon: 'ri-government-line',
      color: '#1976D2',
      description: 'Comprehensive fire safety for schools, hospitals, ministries, and public infrastructure',
      image: 'modern government building with fire safety systems emergency response vehicles professional photography bright daylight Nigerian architecture'
    },
    {
      id: 'market-shield',
      name: 'Market Shield™',
      tagline: 'Preventing Market Fires',
      icon: 'ri-store-3-line',
      color: '#F57C00',
      description: 'Complete fire prevention programs for markets, malls, and commercial hubs',
      image: 'busy Nigerian market with modern fire safety equipment fire extinguishers smoke detectors professional photography vibrant commercial activity safety systems visible'
    },
    {
      id: 'forever-fireshield',
      name: 'Forever FireShield™',
      tagline: 'For Military Facilities',
      icon: 'ri-shield-star-line',
      color: '#388E3C',
      description: 'Permanent fire protection systems for barracks, depots, hospitals, and command centers',
      image: 'military facility with advanced fire protection systems security monitoring command center professional photography strategic infrastructure'
    }
  ];

  const assetShieldFeatures = [
    {
      icon: 'ri-eye-line',
      title: '24/7 Remote Monitoring',
      description: 'Real-time monitoring of client properties with instant alerts and live dashboards'
    },
    {
      icon: 'ri-time-line',
      title: 'Rapid Fire Response',
      description: 'Private rapid response teams to minimize losses and protect insured assets'
    },
    {
      icon: 'ri-tools-line',
      title: 'Certified Installations',
      description: 'Professional installation of fire alarms, sprinklers, hydrants, and detection systems'
    },
    {
      icon: 'ri-file-chart-line',
      title: 'Risk Assessment Dashboards',
      description: 'Comprehensive fire risk reports and analytics for portfolio management'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Annual Maintenance',
      description: 'Scheduled maintenance, inspections, and system upgrades included'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Revenue Sharing',
      description: 'Partners earn 10-25% on installations, monitoring fees, and upgrades'
    }
  ];

  const governmentFeatures = [
    {
      icon: 'ri-building-line',
      title: 'Public Building Protection',
      description: 'Fire systems for schools, hospitals, ministries, and government offices'
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Response Units',
      description: 'Dedicated rapid response for government facility emergencies'
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Oversight Dashboards',
      description: '24/7 monitoring dashboards for facility managers and oversight bodies'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Compliance Management',
      description: 'Maintenance, inspections, and staff training for regulatory compliance'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Portfolio Risk Reports',
      description: 'Comprehensive risk assessment reports for all government facilities'
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Public Awareness Campaigns',
      description: 'Co-branded fire safety awareness programs for citizens and staff'
    }
  ];

  const marketShieldFeatures = [
    {
      icon: 'ri-map-pin-line',
      title: 'High-Risk Zone Targeting',
      description: 'Focus on markets, malls, and commercial hubs with elevated fire risk'
    },
    {
      icon: 'ri-shield-flash-line',
      title: 'Full Prevention Programs',
      description: 'Complete systems: alarms, sprinklers, hydrants, and detection equipment'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Market Monitoring',
      description: 'Continuous monitoring with rapid response for commercial markets'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Regular Safety Audits',
      description: 'Periodic fire safety audits of stalls, zones, and market infrastructure'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Trader Training Programs',
      description: 'Fire safety training for market officials, traders, and security staff'
    },
    {
      icon: 'ri-shopping-bag-3-line',
      title: 'Emergency Equipment Supply',
      description: 'Extinguishers, hoses, signage, smoke detectors for all market zones'
    }
  ];

  const foreverFireShieldFeatures = [
    {
      icon: 'ri-shield-check-line',
      title: 'Permanent Installation',
      description: 'Lifetime fire detection and suppression systems for all military facilities'
    },
    {
      icon: 'ri-radar-line',
      title: 'Command Center Monitoring',
      description: '24/7 monitoring with live alerts directly to base command'
    },
    {
      icon: 'ri-truck-line',
      title: 'Rapid Response Units',
      description: 'Dedicated emergency response teams with <15 minute response time'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Lifetime Maintenance',
      description: 'Annual maintenance, inspections, and system upgrades for reliability'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Risk Intelligence Dashboards',
      description: 'Real-time fire risk analytics and predictive AI-driven alerts'
    },
    {
      icon: 'ri-team-line',
      title: 'Military Staff Training',
      description: 'Specialized fire safety and emergency response drills for personnel'
    }
  ];

  const getCurrentFeatures = () => {
    switch (activeProgram) {
      case 'asset-shield':
        return assetShieldFeatures;
      case 'government':
        return governmentFeatures;
      case 'market-shield':
        return marketShieldFeatures;
      case 'forever-fireshield':
        return foreverFireShieldFeatures;
      default:
        return assetShieldFeatures;
    }
  };

  const partnershipBenefits = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Revenue Sharing',
      description: 'Earn 10-25% on installations, monitoring, and upgrades'
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Exclusive Products',
      description: 'Co-branded protection plans to differentiate in the market'
    },
    {
      icon: 'ri-tools-fill',
      title: 'Full Operational Support',
      description: 'We handle installations, monitoring, and rapid response'
    },
    {
      icon: 'ri-bar-chart-grouped-line',
      title: 'Data-Driven Insights',
      description: 'Real-time dashboards to reduce risk and improve profitability'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Pilot Programs',
      description: 'Start small, demonstrate value, then scale nationwide'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Market Leadership',
      description: 'Position as the most innovative partner in fire safety'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[140px] md:pt-[148px] pb-12 md:pb-20">
        {/* Hero Carousel Section */}
        <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#D32F2F]/20 text-white overflow-hidden">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28slide.image%29%7D&width=1920&height=800&seq=partnerslide${index}&orientation=landscape')] bg-cover bg-center opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
            </div>
          ))}

          {/* Content */}
          <div className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-6 text-center py-16 md:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F2F] rounded-full mb-6">
              <i className="ri-handshake-line text-lg"></i>
              <span className="text-sm font-bold">{heroSlides[currentSlide].badge}</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => openWhatsApp('Strategic Partnership')}
              >
                <i className="ri-whatsapp-line mr-2"></i>
                Discuss Partnership
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <i className="ri-arrow-left-s-line text-2xl text-white"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <i className="ri-arrow-right-s-line text-2xl text-white"></i>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? 'bg-[#D32F2F] w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Partnership Programs</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored fire safety solutions for different sectors with proven ROI and risk reduction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => (
                <div
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={`group cursor-pointer bg-white rounded-xl p-6 transition-all duration-300 border-2 ${
                    activeProgram === program.id
                      ? 'border-[#D32F2F] shadow-xl scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                      activeProgram === program.id ? 'bg-[#D32F2F]' : 'bg-gray-100 group-hover:bg-[#D32F2F]/10'
                    }`}
                  >
                    <i
                      className={`${program.icon} text-3xl transition-colors ${
                        activeProgram === program.id ? 'text-white' : 'text-[#D32F2F]'
                      }`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{program.name}</h3>
                  <p className="text-sm text-[#D32F2F] font-medium mb-3">{program.tagline}</p>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            {programs.map((program) => (
              activeProgram === program.id && (
                <div key={program.id} className="space-y-12">
                  {/* Program Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F2F]/10 rounded-full mb-4">
                        <i className={`${program.icon} text-[#D32F2F]`}></i>
                        <span className="text-sm font-bold text-[#D32F2F]">{program.tagline}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4">{program.name}</h2>
                      <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                      
                      {program.id === 'asset-shield' && (
                        <div className="bg-[#D32F2F]/5 border-l-4 border-[#D32F2F] p-6 rounded-r-lg mb-6">
                          <p className="text-base text-gray-700 font-medium mb-2">
                            <strong>Pitch Message:</strong>
                          </p>
                          <p className="text-gray-600 italic">
                            "We help you sell higher premium insurance plans while dramatically reducing fire losses."
                          </p>
                        </div>
                      )}

                      {program.id === 'forever-fireshield' && (
                        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                          <p className="text-base text-gray-700 font-medium mb-2">
                            <strong>Pilot Program Bonus:</strong>
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Free installation in one facility</li>
                            <li>• 6 months monitoring costs absorbed</li>
                            <li>• Complete staff training included</li>
                          </ul>
                        </div>
                      )}

                      <Button
                        size="lg"
                        variant="primary"
                        onClick={() => openWhatsApp(program.name)}
                      >
                        <i className="ri-whatsapp-line mr-2"></i>
                        Request {program.name} Details
                      </Button>
                    </div>

                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28program.image%29%7D&width=800&height=600&seq=${program.id}img&orientation=landscape`}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Program Features */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-8 text-center">
                      Program Features & Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getCurrentFeatures().map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-4">
                            <i className={`${feature.icon} text-2xl text-[#D32F2F]`}></i>
                          </div>
                          <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scaling Strategy */}
                  {program.id === 'asset-shield' && (
                    <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-xl p-8 md:p-12 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">Scaling Strategy</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-4xl font-bold mb-2">Phase 1</div>
                          <p className="text-white/90">Pilot with top 50-100 properties per partner</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold mb-2">Phase 2</div>
                          <p className="text-white/90">Expand to 5,000+ buildings across major cities</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold mb-2">Phase 3</div>
                          <p className="text-white/90">Scale to 50,000+ buildings nationwide for market dominance</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {program.id === 'government' && (
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">Implementation Roadmap</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-bold mb-2">Pilot Phase</div>
                          <p className="text-white/90">Start with 5-10 government facilities to demonstrate value</p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-2">Statewide Expansion</div>
                          <p className="text-white/90">Scale to all public buildings across the state</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {program.id === 'market-shield' && (
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-8 md:p-12 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">Partnership Models</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-government-line text-2xl"></i>
                          </div>
                          <div className="text-xl font-bold mb-2">State Government</div>
                          <p className="text-white/90 text-sm">Full market coverage contracts</p>
                        </div>
                        <div>
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-team-line text-2xl"></i>
                          </div>
                          <div className="text-xl font-bold mb-2">Traders' Associations</div>
                          <p className="text-white/90 text-sm">Subscription-based protection plans</p>
                        </div>
                        <div>
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-shield-check-line text-2xl"></i>
                          </div>
                          <div className="text-xl font-bold mb-2">Insurance-Linked</div>
                          <p className="text-white/90 text-sm">"Protected Market Plans" with insurers</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Why Partner With FireAlarm.ng?</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Win-win partnerships where both parties profit while reducing fire risk across Nigeria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${benefit.icon} text-2xl text-[#D32F2F]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Partnership Impact</h2>
              <p className="text-base md:text-lg text-gray-600">
                Proven results from our enterprise fire safety programs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2">85%</div>
                <div className="text-sm md:text-base text-gray-600">Fire Loss Reduction</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2">&lt;15min</div>
                <div className="text-sm md:text-base text-gray-600">Response Time</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-600">Monitoring Coverage</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2">10-25%</div>
                <div className="text-sm md:text-base text-gray-600">Partner Revenue Share</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#2C2C2C] to-[#1a1a1a] text-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build a Strategic Partnership?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how FireAlarm.ng can help you reduce fire risk, increase revenue, and position your organization as a leader in fire safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/2348145540554?text=${encodeURIComponent('Hi! I am interested in becoming a FireAlarm.ng partner.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-2xl"></i>
                Apply for Partnership
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Meeting
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
