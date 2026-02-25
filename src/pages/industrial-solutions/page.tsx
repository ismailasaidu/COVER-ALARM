
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function IndustrialSolutionsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const [activeSolution, setActiveSolution] = useState<string>('manufacturing');

  // SEO Configuration
  useSEO({
    title: 'Industrial & Commercial Fire Safety Solutions Nigeria | FireAlarm.ng',
    description: 'Complete fire protection systems for factories, warehouses, oil & gas facilities, shopping malls, hotels, and commercial buildings across Nigeria. 24/7 monitoring, automatic suppression systems, and rapid emergency response. Protect your business with enterprise-grade fire safety solutions.',
    keywords: 'industrial fire safety Nigeria, commercial fire protection, factory fire systems, warehouse fire safety, oil gas fire protection, shopping mall fire systems, hotel fire safety, enterprise fire solutions Nigeria, automatic fire suppression, industrial fire alarms',
    canonical: `${siteUrl}/industrial-solutions`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/industrial-solutions#webpage`,
      url: `${siteUrl}/industrial-solutions`,
      name: 'Industrial & Commercial Fire Safety Solutions',
      description: 'Enterprise-grade fire protection systems for industrial facilities, commercial buildings, and high-risk environments across Nigeria',
      provider: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'FireAlarm.ng'
      }
    }
  });

  const openWhatsApp = (solution: string) => {
    const phone = '2348145540554';
    const message = encodeURIComponent(`Hi, I'm interested in ${solution} fire safety solutions. Please provide more details.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const solutions = [
    {
      id: 'manufacturing',
      name: 'Manufacturing Facilities',
      icon: 'ri-factory-line',
      risks: [
        'Combustible materials and chemicals',
        'High-temperature processes',
        'Electrical equipment hazards',
        'Dust and vapor accumulation'
      ],
      solutions: [
        'Automatic fire detection with heat and smoke sensors',
        'Foam-based suppression systems for chemical fires',
        'Industrial-grade fire extinguishers (ABC, CO2, Foam)',
        'Emergency shutdown systems',
        'Fire-resistant storage cabinets',
        '24/7 monitoring and rapid response'
      ],
      image: 'modern industrial manufacturing plant interior with automated machinery robotic arms assembly lines bright overhead lighting clean organized factory floor fire safety equipment visible professional industrial photography wide angle view'
    },
    {
      id: 'warehouse',
      name: 'Warehouse & Logistics',
      icon: 'ri-building-2-line',
      risks: [
        'High-stacked combustible goods',
        'Limited access for firefighting',
        'Rapid fire spread potential',
        'Forklift and electrical hazards'
      ],
      solutions: [
        'ESFR (Early Suppression Fast Response) sprinkler systems',
        'Smoke detection with high-ceiling capability',
        'Fire hydrant systems with adequate coverage',
        'Emergency lighting and exit signage',
        'Fire-rated storage areas',
        'Regular inspection and maintenance programs'
      ],
      image: 'massive modern warehouse interior with tall storage racks pallets organized inventory bright industrial lighting wide aisles forklifts visible clean professional logistics facility aerial perspective'
    },
    {
      id: 'oil-gas',
      name: 'Oil & Gas Facilities',
      icon: 'ri-oil-line',
      risks: [
        'Highly flammable liquids and gases',
        'Explosive atmospheres',
        'High-pressure systems',
        'Remote locations with limited emergency services'
      ],
      solutions: [
        'Explosion-proof fire detection systems',
        'Foam and gas suppression systems',
        'Deluge systems for rapid area protection',
        'Fire-resistant coatings and barriers',
        'Emergency shutdown valves',
        'Specialized training for personnel'
      ],
      image: 'expansive petroleum refinery complex at golden hour with massive industrial storage tanks silver pipelines intricate processing equipment steel structures against dramatic sunset sky professional industrial architecture photography emphasizing scale and infrastructure'
    },
    {
      id: 'shopping-malls',
      name: 'Shopping Malls & Retail',
      icon: 'ri-shopping-bag-3-line',
      color: '#1976D2',
      tagline: 'Protect Customers & Businesses',
      description: 'Complete fire safety solutions for shopping centers, retail complexes, and commercial plazas',
      image: 'modern shopping mall interior with fire safety systems sprinklers smoke detectors emergency exits shoppers retail stores professional photography bright commercial lighting simple background',
      risks: ['High occupancy', 'Multiple tenants', 'Food courts', 'Parking structures'],
      solutions: ['Addressable fire alarms', 'Voice evacuation', 'Sprinkler systems', 'Emergency lighting']
    },
    {
      id: 'hotels',
      name: 'Hotels & Hospitality',
      icon: 'ri-hotel-line',
      color: '#7B1FA2',
      tagline: 'Guest Safety & Compliance',
      description: 'Integrated fire protection for hotels, resorts, restaurants, and hospitality venues',
      image: 'luxury hotel lobby with modern fire safety systems smoke detectors sprinklers elegant interior professional photography warm hospitality lighting simple background',
      risks: ['Guest rooms', 'Kitchen fires', 'Laundry facilities', '24/7 operations'],
      solutions: ['Room smoke detectors', 'Kitchen suppression', 'Fire doors', 'Evacuation systems']
    },
    {
      id: 'offices',
      name: 'Office Buildings',
      icon: 'ri-building-2-line',
      color: '#0288D1',
      tagline: 'Workplace Safety & Business Continuity',
      description: 'Modern fire safety systems for corporate offices, business parks, and commercial towers',
      image: 'modern office building interior with fire safety systems smoke detectors sprinklers workstations professional photography bright office lighting simple background',
      risks: ['Electrical equipment', 'Server rooms', 'High occupancy', 'Document storage'],
      solutions: ['Addressable systems', 'Gas suppression for IT', 'Emergency evacuation', 'Fire extinguishers']
    }
  ];

  const systemComponents = [
    {
      icon: 'ri-alarm-warning-line',
      title: 'Fire Detection Systems',
      description: 'Addressable and conventional fire alarm panels with smoke, heat, and flame detectors',
      features: ['Multi-zone coverage', 'Instant alerts', 'False alarm reduction', 'Remote monitoring']
    },
    {
      icon: 'ri-water-flash-line',
      title: 'Suppression Systems',
      description: 'Automatic sprinklers, deluge systems, foam systems, and gas suppression solutions',
      features: ['Rapid activation', 'Zone control', 'Minimal damage', 'Code compliant']
    },
    {
      icon: 'ri-eye-line',
      title: '24/7 Monitoring',
      description: 'Real-time remote monitoring with instant alerts and emergency response coordination',
      features: ['Live dashboards', 'Mobile alerts', 'Response teams', 'System diagnostics']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Fire Hydrants & Hose Reels',
      description: 'Complete hydrant systems, landing valves, hose reels, and manual firefighting equipment',
      features: ['Strategic placement', 'Pressure testing', 'Easy access', 'Regular maintenance']
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Emergency Systems',
      description: 'Emergency lighting, exit signs, voice evacuation, and public address systems',
      features: ['Battery backup', 'Clear signage', 'Voice guidance', 'Panic buttons']
    },
    {
      icon: 'ri-tools-line',
      title: 'Maintenance & Support',
      description: 'Scheduled inspections, testing, repairs, and 24/7 technical support services',
      features: ['Annual contracts', 'Preventive maintenance', 'Rapid repairs', 'Compliance reports']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Site Assessment',
      description: 'Comprehensive fire risk evaluation and facility inspection',
      icon: 'ri-search-eye-line'
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'Tailored fire protection system design based on your specific needs',
      icon: 'ri-draft-line'
    },
    {
      number: '03',
      title: 'Professional Installation',
      description: 'Certified technicians install all equipment to code standards',
      icon: 'ri-tools-fill'
    },
    {
      number: '04',
      title: 'Testing & Commissioning',
      description: 'Rigorous testing and system validation before handover',
      icon: 'ri-checkbox-circle-line'
    },
    {
      number: '05',
      title: 'Staff Training',
      description: 'Comprehensive training for your team on system operation',
      icon: 'ri-graduation-cap-line'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: '24/7 monitoring, maintenance, and rapid emergency response',
      icon: 'ri-customer-service-2-line'
    }
  ];

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Life Safety',
      description: 'Protect employees, customers, and visitors from fire hazards'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Asset Protection',
      description: 'Minimize property damage and business interruption losses'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Regulatory Compliance',
      description: 'Meet all Nigerian fire safety codes and insurance requirements'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Business Continuity',
      description: 'Rapid detection and response to keep operations running'
    },
    {
      icon: 'ri-shield-flash-line',
      title: 'Insurance Benefits',
      description: 'Lower premiums with certified fire protection systems'
    },
    {
      icon: 'ri-time-line',
      title: 'Rapid Response',
      description: '&lt;15 minute emergency response time across major cities'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: 'ri-factory-line' },
    { name: 'Oil & Gas', icon: 'ri-oil-line' },
    { name: 'Warehousing', icon: 'ri-building-4-line' },
    { name: 'Retail & Malls', icon: 'ri-shopping-bag-3-line' },
    { name: 'Hotels', icon: 'ri-hotel-line' },
    { name: 'Offices', icon: 'ri-building-2-line' },
    { name: 'Healthcare', icon: 'ri-hospital-line' },
    { name: 'Education', icon: 'ri-school-line' },
    { name: 'Data Centers', icon: 'ri-server-line' },
    { name: 'Food Processing', icon: 'ri-restaurant-line' },
    { name: 'Logistics', icon: 'ri-truck-line' },
    { name: 'Aviation', icon: 'ri-plane-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[140px] md:pt-[148px] pb-12 md:pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#D32F2F]/20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20industrial%20facility%20with%20advanced%20fire%20protection%20systems%20sprinklers%20smoke%20detectors%20manufacturing%20plant%20safety%20equipment%20professional%20photography%20dramatic%20lighting%20simple%20background&width=1920&height=800&seq=industrialhero&orientation=landscape')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 text-center py-16 md:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F2F] rounded-full mb-6">
              <i className="ri-building-line text-lg"></i>
              <span className="text-sm font-bold">Enterprise Fire Safety</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Industrial & Commercial Fire Safety Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade fire detection, suppression, and monitoring systems. Serving factories, warehouses, oil & gas facilities, malls, hotels, and commercial buildings across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => openWhatsApp('Industrial Solutions')}
              >
                <i className="ri-whatsapp-line mr-2"></i>
                Request Site Assessment
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Industries We Serve</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized fire safety solutions tailored to your industry's unique challenges
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D32F2F] transition-colors">
                    <i className={`${industry.icon} text-3xl text-[#D32F2F] group-hover:text-white transition-colors`}></i>
                  </div>
                  <h3 className="text-sm font-bold text-[#2C2C2C]">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions by Industry */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Solutions by Industry</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Click on any industry to see customized fire safety solutions
              </p>
            </div>

            {/* Industry Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`p-4 rounded-xl transition-all cursor-pointer ${
                    activeSolution === solution.id
                      ? 'bg-[#D32F2F] text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-[#2C2C2C] hover:bg-gray-100'
                  }`}
                >
                  <i className={`${solution.icon} text-2xl mb-2 block`}></i>
                  <span className="text-xs font-bold block">{solution.name.split('&')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Solution Details */}
            {solutions.map((solution) => (
              activeSolution === solution.id && (
                <div key={solution.id} className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D32F2F]/10 rounded-full mb-4">
                        <i className={`${solution.icon} text-[#D32F2F]`}></i>
                        <span className="text-sm font-bold text-[#D32F2F]">{solution.tagline}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">{solution.name}</h3>
                      <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-base font-bold text-[#2C2C2C] mb-3 flex items-center gap-2">
                            <i className="ri-alert-line text-[#D32F2F]"></i>
                            Common Fire Risks
                          </h4>
                          <ul className="space-y-2">
                            {solution.risks.map((risk, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <i className="ri-arrow-right-s-line text-[#D32F2F] mt-0.5"></i>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-[#2C2C2C] mb-3 flex items-center gap-2">
                            <i className="ri-shield-check-line text-[#D32F2F]"></i>
                            Our Solutions
                          </h4>
                          <ul className="space-y-2">
                            {solution.solutions.map((sol, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                <i className="ri-checkbox-circle-fill text-green-600 mt-0.5"></i>
                                {sol}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        size="lg"
                        variant="primary"
                        onClick={() => openWhatsApp(solution.name)}
                      >
                        <i className="ri-whatsapp-line mr-2"></i>
                        Get {solution.name} Quote
                      </Button>
                    </div>

                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28solution.image%29%7D&width=800&height=600&seq=${solution.id}detail&orientation=landscape`}
                        alt={solution.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* System Components */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Complete Fire Protection Systems</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Integrated solutions covering detection, suppression, monitoring, and emergency response
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${component.icon} text-2xl text-[#D32F2F]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{component.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <i className="ri-checkbox-circle-fill text-green-600"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Our Implementation Process</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                From assessment to ongoing support, we handle everything
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 ml-8">
                    <i className={`${step.icon} text-2xl text-[#D32F2F]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Why Choose FireAlarm.ng?</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade fire safety with proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${benefit.icon} text-2xl text-[#D32F2F]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Businesses</h2>
              <p className="text-lg text-white/90">
                Protecting Nigeria's industrial and commercial facilities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-sm md:text-base text-white/90">Facilities Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm md:text-base text-white/90">Monitoring & Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">&lt;15min</div>
                <div className="text-sm md:text-base text-white/90">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-sm md:text-base text-white/90">Code Compliant</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a free site assessment and customized fire safety proposal for your facility. Our experts will evaluate your risks and recommend the best solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/2348145540554?text=${encodeURIComponent('Hi! I need a custom fire safety solution for my facility.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-2xl"></i>
                Request Custom Quote
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
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
