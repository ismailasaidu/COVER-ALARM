import { hydrantsAndSprinklers } from './hydrants-sprinklers';
import { fireAlarmSystems } from './fire-alarm-systems';
import { allFireEquipment } from './all-fire-equipment';

export const featuredProducts = [
  {
    id: 1,
    name: "Advanced Addressable Fire Alarm Control Panel",
    model: "FACP-2000X",
    price: 1403998,
    originalPrice: 1619998,
    rating: 4.8,
    reviews: 127,
    image: "https://readdy.ai/api/search-image?query=professional%20modern%20fire%20alarm%20control%20panel%20with%20digital%20display%20mounted%20on%20white%20wall%20clean%20industrial%20equipment%20product%20photography%20white%20background%20high%20quality%20detailed%20view&width=400&height=400&seq=facp2000x&orientation=squarish",
    badge: "Best Seller",
    inStock: true,
    stockLevel: "high",
    category: "Control Panels"
  },
  {
    id: 2,
    name: "Photoelectric Smoke Detector with Heat Sensor",
    model: "SD-450H",
    price: 97198,
    originalPrice: null,
    rating: 4.9,
    reviews: 342,
    image: "https://readdy.ai/api/search-image?query=white%20circular%20photoelectric%20smoke%20detector%20ceiling%20mounted%20fire%20alarm%20sensor%20clean%20product%20shot%20simple%20white%20background%20professional%20safety%20equipment%20photography&width=400&height=400&seq=sd450h&orientation=squarish",
    badge: "Best Seller",
    inStock: true,
    stockLevel: "high",
    category: "Smoke Detectors"
  },
  {
    id: 3,
    name: "Intelligent Heat Detector - Rate of Rise",
    model: "HD-300ROR",
    price: 80998,
    originalPrice: 102598,
    rating: 4.7,
    reviews: 89,
    image: "https://readdy.ai/api/search-image?query=white%20heat%20detector%20fire%20alarm%20sensor%20round%20ceiling%20device%20industrial%20safety%20equipment%20clean%20white%20background%20product%20photography%20professional%20quality&width=400&height=400&seq=hd300ror&orientation=squarish",
    badge: null,
    inStock: true,
    stockLevel: "medium",
    category: "Heat Detectors"
  },
  {
    id: 4,
    name: "Manual Call Point - Break Glass Type",
    model: "MCP-RED-01",
    price: 49678,
    originalPrice: null,
    rating: 4.9,
    reviews: 256,
    image: "https://readdy.ai/api/search-image?query=red%20manual%20call%20point%20break%20glass%20fire%20alarm%20button%20wall%20mounted%20emergency%20device%20simple%20white%20background%20professional%20product%20photography%20safety%20equipment&width=400&height=400&seq=mcpred01&orientation=squarish",
    badge: "Best Seller",
    inStock: true,
    stockLevel: "high",
    category: "Manual Call Points"
  },
  {
    id: 5,
    name: "High-Output Fire Alarm Sounder with Strobe",
    model: "SS-120DB",
    price: 140398,
    originalPrice: null,
    rating: 4.6,
    reviews: 178,
    image: "https://readdy.ai/api/search-image?query=red%20fire%20alarm%20sounder%20with%20strobe%20light%20wall%20mounted%20emergency%20alert%20device%20clean%20white%20background%20industrial%20safety%20equipment%20professional%20photography&width=400&height=400&seq=ss120db&orientation=squarish",
    badge: "New",
    inStock: true,
    stockLevel: "high",
    category: "Sounders & Sirens"
  },
  {
    id: 6,
    name: "Fire Resistant Cable 2-Core 1.5mm - 100m",
    model: "FRC-2C-1.5-100",
    price: 205198,
    originalPrice: 237598,
    rating: 4.8,
    reviews: 94,
    image: "https://readdy.ai/api/search-image?query=red%20fire%20alarm%20cable%20coil%20industrial%20electrical%20wire%20spool%20professional%20product%20photography%20simple%20white%20background%20safety%20equipment%20high%20quality&width=400&height=400&seq=frc2c15100&orientation=squarish",
    badge: null,
    inStock: true,
    stockLevel: "low",
    category: "Fire Alarm Cables"
  },
  {
    id: 7,
    name: "Wireless Smoke Detector with 10-Year Battery",
    model: "WSD-10Y",
    price: 129598,
    originalPrice: null,
    rating: 4.9,
    reviews: 412,
    image: "https://readdy.ai/api/search-image?query=modern%20white%20wireless%20smoke%20detector%20circular%20ceiling%20mounted%20fire%20alarm%20with%20battery%20compartment%20clean%20white%20background%20professional%20product%20shot&width=400&height=400&seq=wsd10y&orientation=squarish",
    badge: "Best Seller",
    inStock: true,
    stockLevel: "high",
    category: "Smoke Detectors"
  },
  {
    id: 8,
    name: "Addressable Module Interface for Conventional Devices",
    model: "AMI-CONV-4",
    price: 172798,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    image: "https://readdy.ai/api/search-image?query=electronic%20fire%20alarm%20interface%20module%20circuit%20board%20device%20industrial%20control%20equipment%20white%20background%20professional%20technical%20product%20photography&width=400&height=400&seq=amiconv4&orientation=squarish",
    badge: null,
    inStock: true,
    stockLevel: "medium",
    category: "Accessories & Spare Parts"
  }
];

// Export the comprehensive product list
export const allProducts = allFireEquipment;

export const categories = [
  {
    id: 1,
    name: "Fire Alarm Control Panels",
    slug: "control-panels",
    productCount: 45,
    image: "https://readdy.ai/api/search-image?query=modern%20fire%20alarm%20control%20panel%20with%20digital%20display%20and%20buttons%20mounted%20on%20wall%20professional%20industrial%20equipment%20simple%20background%20clean%20product%20photography&width=300&height=300&seq=cat1&orientation=squarish"
  },
  {
    id: 2,
    name: "Smoke Detectors",
    slug: "smoke-detectors",
    productCount: 78,
    image: "https://readdy.ai/api/search-image?query=white%20smoke%20detector%20ceiling%20mounted%20fire%20alarm%20sensor%20circular%20device%20clean%20simple%20background%20professional%20product%20photography%20safety%20equipment&width=300&height=300&seq=cat2&orientation=squarish"
  },
  {
    id: 3,
    name: "Heat Detectors",
    slug: "heat-detectors",
    productCount: 52,
    image: "https://readdy.ai/api/search-image?query=white%20heat%20detector%20fire%20alarm%20sensor%20ceiling%20mounted%20round%20device%20simple%20clean%20background%20industrial%20safety%20equipment%20professional%20photo&width=300&height=300&seq=cat3&orientation=squarish"
  },
  {
    id: 4,
    name: "Manual Call Points",
    slug: "manual-call-points",
    productCount: 34,
    image: "https://readdy.ai/api/search-image?query=red%20manual%20call%20point%20break%20glass%20fire%20alarm%20emergency%20button%20wall%20mounted%20device%20simple%20white%20background%20professional%20product%20shot&width=300&height=300&seq=cat4&orientation=squarish"
  },
  {
    id: 5,
    name: "Sounders & Sirens",
    slug: "sounders-sirens",
    productCount: 41,
    image: "https://readdy.ai/api/search-image?query=red%20fire%20alarm%20sounder%20with%20strobe%20light%20emergency%20alert%20device%20wall%20mounted%20simple%20background%20industrial%20safety%20equipment%20professional%20photography&width=300&height=300&seq=cat5&orientation=squarish"
  },
  {
    id: 6,
    name: "Fire Alarm Cables",
    slug: "fire-alarm-cables",
    productCount: 28,
    image: "https://readdy.ai/api/search-image?query=red%20fire%20alarm%20cable%20coil%20electrical%20wire%20spool%20industrial%20equipment%20simple%20white%20background%20professional%20product%20photography%20safety%20grade&width=300&height=300&seq=cat6&orientation=squarish"
  }
];

export const productDetail = {
  id: 2,
  name: "Photoelectric Smoke Detector with Heat Sensor",
  model: "SD-450H",
  price: 97198,
  originalPrice: null,
  rating: 4.9,
  reviews: 342,
  images: [
    "https://readdy.ai/api/search-image?query=white%20circular%20photoelectric%20smoke%20detector%20ceiling%20mounted%20fire%20alarm%20sensor%20clean%20product%20shot%20simple%20white%20background%20professional%20safety%20equipment%20photography&width=600&height=600&seq=sd450h1&orientation=squarish",
    "https://readdy.ai/api/search-image?query=smoke%20detector%20side%20view%20showing%20mounting%20bracket%20and%20connection%20terminals%20white%20background%20technical%20product%20photography%20fire%20alarm%20equipment&width=600&height=600&seq=sd450h2&orientation=squarish",
    "https://readdy.ai/api/search-image?query=smoke%20detector%20internal%20components%20circuit%20board%20sensor%20chamber%20technical%20view%20white%20background%20professional%20product%20photography%20fire%20safety&width=600&height=600&seq=sd450h3&orientation=squarish",
    "https://readdy.ai/api/search-image?query=smoke%20detector%20installed%20on%20white%20ceiling%20realistic%20installation%20view%20fire%20alarm%20system%20professional%20photography%20safety%20equipment&width=600&height=600&seq=sd450h4&orientation=squarish"
  ],
  inStock: true,
  stockQuantity: 156,
  category: "Smoke Detectors",
  subcategory: "Photoelectric Detectors",
  description: "The SD-450H is a premium dual-sensor smoke detector combining advanced photoelectric smoke detection with integrated heat sensing technology. Designed for commercial and residential applications, this detector provides superior protection against both fast-flaming and slow-smoldering fires. The photoelectric sensor excels at detecting smoke particles from smoldering fires, while the integrated heat sensor provides additional protection against rapidly developing fires. This dual-sensor approach significantly reduces false alarms while ensuring reliable fire detection across various fire scenarios.",
  keyFeatures: [
    "Dual-sensor technology: photoelectric smoke + heat detection",
    "Reduces false alarms by up to 60% compared to single-sensor units",
    "Compatible with all major addressable fire alarm systems",
    "Easy twist-lock installation with universal mounting base",
    "LED indicator for visual alarm confirmation",
    "Low battery warning with 30-day advance notice"
  ],
  specifications: {
    "Detection Method": "Photoelectric + Heat Sensor",
    "Operating Voltage": "9-33V DC",
    "Current Draw": "45μA standby, 60mA alarm",
    "Operating Temperature": "-10°C to +50°C",
    "Humidity Range": "10% to 95% RH (non-condensing)",
    "Dimensions": "100mm diameter × 45mm height",
    "Weight": "185g",
    "Mounting": "Ceiling or wall mount",
    "Wire Connections": "2-wire or 4-wire",
    "Response Time": "< 30 seconds",
    "Coverage Area": "Up to 80m² per detector",
    "Certifications": "EN 54-7, UL 268, FM Approved"
  },
  useCase: "Ideal for offices, hotels, hospitals, schools, warehouses, and residential buildings. Particularly effective in areas prone to dust or steam where traditional ionization detectors may cause false alarms. The dual-sensor design makes it suitable for mixed-use spaces where both smoldering and fast-flaming fire risks exist.",
  compatibility: [
    "Compatible with Honeywell addressable panels",
    "Works with Siemens Cerberus PRO systems",
    "Supports Edwards EST3 and EST4 systems",
    "Compatible with Notifier NFS2-3030 and NFS-320 panels",
    "Universal 2-wire and 4-wire configurations"
  ],
  warranty: "5-year manufacturer warranty",
  certifications: ["EN 54-7", "UL 268", "FM Approved", "CE Marked", "SABS Certified"],
  relatedProducts: [1, 3, 7, 11]
};