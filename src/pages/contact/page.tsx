import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      info: '0814 554 0554',
      link: 'tel:+2348145540554',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      info: 'Chat with us',
      link: 'https://wa.me/2348145540554',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      info: 'info@firealarm.ng',
      link: 'mailto:info@firealarm.ng',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      info: 'Abuja, Nigeria',
      link: '#map',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    }
  ];

  const serviceFeatures = [
    {
      icon: 'ri-time-line',
      title: '48-Hour Installation',
      description: 'Fast professional installation across all 36 states',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'NFEC Certified',
      description: 'All equipment meets Nigerian Fire & Safety standards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Round-the-clock emergency response and consultation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-truck-line',
      title: 'Nationwide Delivery',
      description: 'Free delivery and installation to all Nigerian states',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20customer%20service%20center%20professional%20team%20helping%20clients%20fire%20safety%20consultation%20office%20bright%20professional%20environment&width=1920&height=500&seq=contact-hero&orientation=landscape"
              alt="Contact FireAlarm.ng"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          
          <div className="relative h-full flex items-center justify-center z-10">
            <div className="text-center text-white px-4 md:px-6 max-w-4xl w-full">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#D32F2F] rounded-full mb-4 md:mb-6 shadow-lg">
                <i className="ri-customer-service-2-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">Contact Us</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                We're Here to Help
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
                Get in touch with our fire safety experts. Available 24/7 for emergencies.
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
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/20 px-2 md:px-3 py-1 rounded-full">
                <i className="ri-phone-line text-base md:text-lg"></i>
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-map-pin-line text-base md:text-lg"></i>
                <span>All 36 States</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <i className="ri-customer-service-2-line text-base md:text-lg"></i>
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white rounded-full mb-3 md:mb-4 shadow-lg">
                <i className="ri-message-3-line text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-bold">Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#D32F2F] via-orange-500 to-[#D32F2F] bg-clip-text text-transparent">
                Choose Your Preferred Method
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer border-2 border-gray-200 hover:border-transparent relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <i className={`${method.icon} text-2xl md:text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-2">{method.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{method.info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
              {/* Form */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-4 md:mb-6">Send Us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3">
                    <i className="ri-checkbox-circle-fill text-green-600 text-xl md:text-2xl"></i>
                    <p className="text-sm md:text-base text-green-700 font-semibold">Message sent successfully! We'll respond within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#D32F2F] focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#D32F2F] focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#D32F2F] focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="0814 554 0554"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#D32F2F] focus:outline-none transition-colors text-sm md:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="installation">Installation Request</option>
                      <option value="monitoring">24/7 Monitoring</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#D32F2F] focus:outline-none transition-colors resize-none text-sm md:text-base"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D32F2F] to-orange-500 text-white text-base md:text-lg font-bold rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-xl"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-fill text-xl"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Office Location & Service Features */}
              <div>
                {/* Main Office */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-4 md:mb-6">Our Office</h3>
                <div className="group bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-1 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <i className="ri-building-line text-lg md:text-xl text-white"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-bold text-[#2C2C2C] mb-1">Abuja Headquarters</h4>
                        <p className="text-xs md:text-sm text-gray-500 mb-2">Federal Capital Territory</p>
                        <p className="text-xs md:text-sm text-gray-600 mb-2">Plot 123, Central Business District</p>
                        <a href="tel:+2348145540554" className="text-xs md:text-sm text-[#D32F2F] font-semibold hover:underline cursor-pointer">
                          0814 554 0554
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  {serviceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 flex items-start gap-3 md:gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                          <i className={`${feature.icon} text-lg md:text-xl text-white`}></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm md:text-base font-bold text-[#2C2C2C] mb-1">{feature.title}</h4>
                          <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency Contact */}
                <div className="mt-6 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-alarm-warning-line text-xl md:text-2xl"></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold">Emergency Hotline</h4>
                  </div>
                  <p className="text-xs md:text-sm text-red-100 mb-3">For urgent fire safety emergencies, call us immediately:</p>
                  <a
                    href="tel:+2348145540554"
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white text-[#D32F2F] text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-lg md:text-xl"></i>
                    0814 554 0554
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2">Find Us</h2>
              <p className="text-sm md:text-base text-gray-600">Visit our main office in Abuja</p>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9876543210123!2d7.4905!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjguNCJOIDfCsDI5JzI1LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FireAlarm.ng Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}