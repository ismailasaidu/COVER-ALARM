import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: 'Safety First',
      icon: 'ri-shield-check-line',
      description: 'We prioritize the safety of lives and property above all else. Every product we supply meets or exceeds international fire safety standards.',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10'
    },
    {
      title: 'Quality Assurance',
      icon: 'ri-award-line',
      description: 'All our equipment is NFEC-certified and sourced from trusted manufacturers. We guarantee reliability when it matters most.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'Customer Focus',
      icon: 'ri-customer-service-2-line',
      description: 'Your satisfaction drives everything we do. From consultation to installation and beyond, we\'re here to support you 24/7.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Innovation',
      icon: 'ri-lightbulb-flash-line',
      description: 'We stay ahead of fire safety technology trends, bringing you the latest smart monitoring systems and automated solutions.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    }
  ];

  const team = [
    {
      name: 'Adebayo Johnson',
      role: 'Chief Fire Safety Officer',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20male%20fire%20safety%20engineer%20in%20red%20hard%20hat%20and%20safety%20vest%20holding%20clipboard%20confident%20pose%20clean%20background%20corporate%20portrait&width=400&height=400&seq=team-ceo&orientation=squarish',
      bio: '15+ years in fire safety engineering',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Chioma Okafor',
      role: 'Installation Manager',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20female%20fire%20safety%20technician%20in%20red%20hard%20hat%20and%20safety%20vest%20holding%20tools%20confident%20pose%20clean%20background%20corporate%20portrait&width=400&height=400&seq=team-install&orientation=squarish',
      bio: 'Expert in complex system installations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ibrahim Musa',
      role: 'Technical Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20male%20fire%20safety%20technical%20director%20in%20business%20attire%20holding%20tablet%20confident%20pose%20clean%20background%20corporate%20portrait&width=400&height=400&seq=team-tech&orientation=squarish',
      bio: 'NFEC-certified systems specialist',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Ngozi Eze',
      role: 'Customer Success Lead',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20female%20customer%20service%20representative%20in%20business%20attire%20smiling%20confident%20pose%20clean%20background%20corporate%20portrait&width=400&height=400&seq=team-customer&orientation=squarish',
      bio: 'Dedicated to client satisfaction',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const milestones = [
    { year: '2018', event: 'FireAlarm.ng Founded', icon: 'ri-flag-line', color: 'from-red-500 to-orange-500' },
    { year: '2019', event: 'NFEC Certification Achieved', icon: 'ri-award-line', color: 'from-blue-500 to-cyan-500' },
    { year: '2020', event: 'Expanded to All 36 States', icon: 'ri-map-pin-line', color: 'from-purple-500 to-pink-500' },
    { year: '2022', event: '24/7 Monitoring Centre Launched', icon: 'ri-radar-line', color: 'from-green-500 to-teal-500' },
    { year: '2024', event: '2,000+ Businesses Protected', icon: 'ri-shield-check-line', color: 'from-indigo-500 to-blue-500' },
    { year: '2025', event: 'Smart Fire Systems Integration', icon: 'ri-smartphone-line', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20fire%20safety%20company%20office%20building%20professional%20team%20working%20together%20fire%20equipment%20display%20showroom%20bright%20professional%20environment&width=1920&height=600&seq=about-hero&orientation=landscape"
              alt="FireAlarm.ng Office"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          
          <div className="relative h-full flex items-center justify-center z-10">
            <div className="text-center text-white px-4 md:px-6 max-w-4xl w-full">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F] rounded-full mb-4 md:mb-6 shadow-lg">
                <i className="ri-information-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">About Us</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                Protecting Nigerian Businesses<br />Since 2018
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto">
                Nigeria's most trusted fire safety equipment supplier. NFEC-certified products, professional installation, and 24/7 monitoring services.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#D32F2F] text-white py-2 md:py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xs md:text-sm font-semibold">
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-time-line text-base md:text-lg"></i>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/20 px-2 md:px-3 py-1 rounded-full">
                <i className="ri-shield-check-line text-base md:text-lg"></i>
                <span>NFEC Certified</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-building-line text-base md:text-lg"></i>
                <span>2,000+ Clients</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-map-pin-line text-base md:text-lg"></i>
                <span>All 36 States</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F]/10 rounded-full mb-4 md:mb-6">
                  <i className="ri-book-open-line text-[#D32F2F] text-sm md:text-base"></i>
                  <span className="text-xs md:text-sm font-bold text-[#D32F2F]">Our Story</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#2C2C2C]">
                  Building a Safer Nigeria, One Business at a Time
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Founded in 2018, FireAlarm.ng was born from a simple mission: to make professional fire safety equipment accessible to every Nigerian business, regardless of size or location.
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  We saw too many businesses struggling with substandard equipment, delayed installations, and lack of proper certification. We knew there had to be a better way.
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                  Today, we're proud to serve over 2,000 businesses across all 36 states, with a 100% inspection pass rate and a commitment to 48-hour delivery and installation.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-3 md:p-4 border-2 border-red-100">
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-1">2,000+</div>
                    <div className="text-xs md:text-sm text-gray-600">Businesses Protected</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 md:p-4 border-2 border-blue-100">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-xs md:text-sm text-gray-600">Pass Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 md:p-4 border-2 border-purple-100">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">36</div>
                    <div className="text-xs md:text-sm text-gray-600">States Coverage</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-3 md:p-4 border-2 border-green-100">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">48hrs</div>
                    <div className="text-xs md:text-sm text-gray-600">Avg Delivery</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://static.readdy.ai/image/f38dbee0b97d493b71475a98132a7b29/4da04667e313995333f3353738718298.jpeg"
                    alt="FireAlarm.ng Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-48 h-32 md:h-48 bg-[#D32F2F]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white rounded-full mb-3 md:mb-4 shadow-lg">
                <i className="ri-heart-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">Our Values</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#D32F2F] via-orange-500 to-[#D32F2F] bg-clip-text text-transparent">
                What Drives Us Every Day
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Our core values guide every decision we make and every service we provide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden ${
                    activeValue === index ? 'border-transparent shadow-2xl -translate-y-3' : 'border-gray-200'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    activeValue === index ? 'opacity-100' : ''
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <i className={`${value.icon} text-2xl md:text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">{value.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{value.description}</p>
                  </div>
                  
                  {activeValue === index && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F]/10 rounded-full mb-3 md:mb-4">
                <i className="ri-time-line text-[#D32F2F] text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold text-[#D32F2F]">Our Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C]">Key Milestones</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <i className={`${milestone.icon} text-xl md:text-2xl text-white`}></i>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-2">{milestone.year}</div>
                    <p className="text-sm md:text-base text-gray-700 font-semibold">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white rounded-full mb-3 md:mb-4 shadow-lg">
                <i className="ri-team-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#D32F2F] via-orange-500 to-[#D32F2F] bg-clip-text text-transparent">
                Meet the Experts
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Certified professionals dedicated to your fire safety
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-transparent"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-1">{member.name}</h3>
                    <p className={`text-xs md:text-sm font-semibold mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Ready to Protect Your Business?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-red-100">
              Join 2,000+ Nigerian businesses that trust FireAlarm.ng for their fire safety needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href={`https://wa.me/2348145540554?text=${encodeURIComponent('I want to learn more about FireAlarm.ng')}`}
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
