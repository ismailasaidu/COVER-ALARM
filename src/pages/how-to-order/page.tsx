import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function HowToOrderPage() {
  const orderSteps = [
    {
      number: 1,
      title: "Browse & Select Products",
      description: "Choose from 1000+ fire safety products or select a complete package",
      icon: "ri-shopping-cart-line",
      details: [
        "Browse by category or search for specific products",
        "View detailed specifications and certifications",
        "Compare products and read customer reviews",
        "Add items to cart or select a ready-made package"
      ]
    },
    {
      number: 2,
      title: "Get Instant Quote",
      description: "Receive immediate pricing with FREE installation included",
      icon: "ri-file-list-3-line",
      details: [
        "Automatic price calculation with bulk discounts",
        "FREE installation cost included (worth ₦50,000+)",
        "FREE delivery within Lagos, discounted nationwide",
        "Payment plan options displayed clearly"
      ]
    },
    {
      number: 3,
      title: "Place Your Order",
      description: "Multiple ordering methods for your convenience",
      icon: "ri-smartphone-line",
      details: [
        "WhatsApp: Send cart link, get response in 2 minutes",
        "Phone: Call 0814 554 0554, speak to sales team",
        "Online: Complete checkout with secure payment",
        "Email: Send requirements to orders@firealarm.ng"
      ]
    },
    {
      number: 4,
      title: "Payment & Confirmation",
      description: "Flexible payment options with instant confirmation",
      icon: "ri-bank-card-line",
      details: [
        "Pay online: Card, bank transfer, or USSD",
        "Pay on delivery: Available for orders under ₦500,000",
        "Payment plans: 3-6 months installments available",
        "Instant order confirmation via SMS & email"
      ]
    },
    {
      number: 5,
      title: "Site Survey (If Needed)",
      description: "FREE site inspection for large installations",
      icon: "ri-map-pin-line",
      details: [
        "FREE for orders above ₦500,000",
        "Technician visits within 24-48 hours",
        "Assess installation requirements",
        "Confirm equipment quantities and placement"
      ]
    },
    {
      number: 6,
      title: "Fast Delivery",
      description: "Products shipped same day or next day",
      icon: "ri-truck-line",
      details: [
        "Lagos: Delivery within 24 hours",
        "Other states: 2-5 business days",
        "Real-time tracking via SMS updates",
        "Delivery team calls 1 hour before arrival"
      ]
    },
    {
      number: 7,
      title: "Professional Installation",
      description: "Certified technicians install everything properly",
      icon: "ri-tools-line",
      details: [
        "Installation scheduled within 48 hours of delivery",
        "NFEC-certified technicians only",
        "Complete installation with testing",
        "Installation typically takes 4-8 hours"
      ]
    },
    {
      number: 8,
      title: "Testing & Certification",
      description: "Full system testing and compliance documentation",
      icon: "ri-shield-check-line",
      details: [
        "Complete system functionality testing",
        "Staff training on equipment usage",
        "Installation certificate provided",
        "Compliance documentation for inspections"
      ]
    },
    {
      number: 9,
      title: "Ongoing Support",
      description: "24/7 support and maintenance services",
      icon: "ri-customer-service-2-line",
      details: [
        "24/7 emergency support hotline",
        "Annual maintenance reminders",
        "Discounted refills and replacements",
        "Priority service for existing customers"
      ]
    }
  ];

  const orderingMethods = [
    {
      method: "WhatsApp Order",
      icon: "ri-whatsapp-line",
      color: "bg-green-600",
      time: "2 min response",
      steps: [
        "Click WhatsApp button on any product",
        "Send your cart or product list",
        "Get instant quote with installation",
        "Confirm order and payment method",
        "Receive order confirmation"
      ],
      cta: "Start WhatsApp Order",
      link: "https://wa.me/2348145540554"
    },
    {
      method: "Phone Order",
      icon: "ri-phone-line",
      color: "bg-blue-600",
      time: "Immediate",
      steps: [
        "Call 0814 554 0554",
        "Speak with sales representative",
        "Discuss your requirements",
        "Get personalized recommendations",
        "Complete order over phone"
      ],
      cta: "Call Now",
      link: "tel:08145540554"
    },
    {
      method: "Online Checkout",
      icon: "ri-shopping-bag-line",
      color: "bg-red-600",
      time: "5 minutes",
      steps: [
        "Add products to cart",
        "Review cart and apply discounts",
        "Enter delivery information",
        "Choose payment method",
        "Complete secure checkout"
      ],
      cta: "Shop Now",
      link: "/shop"
    }
  ];

  const deliveryZones = [
    {
      zone: "Lagos (Mainland & Island)",
      time: "24 hours",
      cost: "FREE",
      details: "Same-day delivery available for orders before 2 PM"
    },
    {
      zone: "Abuja, Port Harcourt, Ibadan",
      time: "2-3 days",
      cost: "₦5,000 - ₦15,000",
      details: "Express delivery available"
    },
    {
      zone: "Other State Capitals",
      time: "3-5 days",
      cost: "₦10,000 - ₦25,000",
      details: "FREE for orders above ₦1,000,000"
    },
    {
      zone: "Remote Areas",
      time: "5-7 days",
      cost: "Custom quote",
      details: "Contact us for accurate delivery estimate"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-[140px] md:pt-[148px] pb-12 md:pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">How to Order Fire Safety Equipment</h1>
            <p className="text-2xl mb-8">From browsing to installation - your complete guide to getting protected</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/2348145540554" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 font-bold transition-all whitespace-nowrap cursor-pointer">
                WhatsApp: Order Now
              </a>
              <a href="tel:08145540554" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 font-bold transition-all whitespace-nowrap cursor-pointer">
                Call: 0814 554 0554
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">24hrs</div>
                <div className="text-gray-600">Lagos Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">FREE</div>
                <div className="text-gray-600">Installation Included</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">Products Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Process Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Complete Order-to-Installation Process</h2>
              <p className="text-xl text-gray-600">9 simple steps from browsing to full protection</p>
            </div>

            <div className="space-y-8">
              {orderSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center">
                        <i className={`${step.icon} text-3xl`}></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-red-600 mb-1">STEP {step.number}</div>
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-lg">{step.description}</p>
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <i className="ri-check-line text-green-600 text-xl flex-shrink-0 mt-1"></i>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Choose Your Ordering Method</h2>
              <p className="text-xl text-gray-600">Order however you prefer - we make it easy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {orderingMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 p-8 hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 ${method.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${method.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{method.method}</h3>
                  <div className="text-center text-green-600 font-bold mb-6">{method.time}</div>
                  <ol className="space-y-3 mb-8">
                    {method.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <Link to={method.link} className={`block w-full ${method.color} hover:opacity-90 text-white py-3 text-center font-bold transition-all whitespace-nowrap`}>
                    {method.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Delivery Zones & Timeline</h2>
              <p className="text-xl text-gray-600">Fast, reliable delivery across Nigeria</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="bg-white p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{zone.zone}</h3>
                      <p className="text-gray-600">{zone.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-600">Delivery Time</div>
                      <div className="text-lg font-bold text-red-600">{zone.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Delivery Cost</div>
                      <div className="text-lg font-bold text-green-600">{zone.cost}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <div className="flex items-start gap-4">
                <i className="ri-information-line text-3xl text-blue-600 flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-lg mb-2">Delivery Tracking</h4>
                  <p className="text-gray-700">All orders include real-time SMS tracking. You'll receive updates when your order is: Confirmed → Packed → Dispatched → Out for Delivery → Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Professional Installation Process</h2>
              <p className="text-xl text-gray-600">FREE installation by NFEC-certified technicians</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included in FREE Installation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>Site Assessment:</strong> Technician evaluates optimal placement
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>Complete Installation:</strong> All equipment properly mounted and connected
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>System Testing:</strong> Full functionality testing of all devices
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>Staff Training:</strong> Quick training on how to use equipment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>Documentation:</strong> Installation certificate and compliance docs
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-double-line text-2xl text-green-600 flex-shrink-0"></i>
                    <div>
                      <strong>Cleanup:</strong> Site left clean and professional
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold mb-6">Installation Timeline</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Delivery Completed</h4>
                      <p className="text-gray-600">Equipment delivered to your location</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Installation Scheduled (24-48hrs)</h4>
                      <p className="text-gray-600">Technician contacts you to schedule convenient time</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Installation Day (4-8hrs)</h4>
                      <p className="text-gray-600">Professional installation completed in one visit</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">System Active & Protected</h4>
                      <p className="text-gray-600">Your facility is now fully protected and compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Flexible Payment Options</h2>
              <p className="text-xl text-gray-600">Choose the payment method that works for you</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-bank-card-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Pay Online</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Debit/Credit Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Bank Transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>USSD Payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Instant confirmation</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-gray-600">Secure payment processing</div>
              </div>

              <div className="bg-white p-8 shadow-lg border-4 border-red-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 text-sm font-bold whitespace-nowrap">
                  MOST POPULAR
                </div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-check-line text-3xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Payment Plans</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>3-6 months installments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Low interest rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Quick approval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Installation starts immediately</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-gray-600">Available for orders ₦200,000+</div>
              </div>

              <div className="bg-white p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-hand-coin-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Pay on Delivery</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Cash payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>POS available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Bank transfer on delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Inspect before paying</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-gray-600">For orders under ₦500,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">How long does the entire process take?</h3>
                <p className="text-gray-700">From order to installation: 3-7 days for Lagos, 5-10 days for other states. Express service available.</p>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Is installation really FREE?</h3>
                <p className="text-gray-700">Yes! Professional installation is included with every order at no extra cost. This includes mounting, testing, and staff training.</p>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Can I track my order?</h3>
                <p className="text-gray-700">Absolutely! You'll receive SMS updates at every stage: order confirmed, packed, dispatched, out for delivery, and delivered.</p>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">What if I need equipment urgently?</h3>
                <p className="text-gray-700">Call our emergency hotline 0814 554 0554. We offer same-day delivery and installation in Lagos for urgent orders.</p>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Do you provide compliance certificates?</h3>
                <p className="text-gray-700">Yes! Every installation includes an installation certificate and all necessary compliance documentation for government inspections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-2xl mb-8">Start your order now - installation within 7 days guaranteed</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/shop" className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold transition-all whitespace-nowrap">
                Browse Products
              </Link>
              <a
                href={`https://wa.me/2348145540554?text=${encodeURIComponent('Hi! I want to place an order for fire safety equipment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-semibold rounded-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-2xl"></i>
                Start Your Order on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
