import {
  Globe,
  Users,
  Fingerprint,
  Layout,
  Building2,
  Server,
  Chrome,
  UserCircle,
  Youtube,
  Shield,
  Wrench,
  DollarSign,
  Check,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: 'Proxies',
      color: 'from-blue-500 to-blue-600',
      description: 'Premium proxy services from trusted providers',
      features: [
        'IP2World Proxies',
        'Luna Proxies',
        '922Proxy',
        'Cherry Proxies',
      ],
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: 'Leads Generation',
      color: 'from-cyan-500 to-cyan-600',
      description: 'High-quality leads for your campaigns',
      features: [
        'Mixed domain leads (loan, finance, insurance) - $10/1500 leads',
        'Gmail-only leads (no company emails) - $15/1500 leads',
        'Mixed data - $5/1500 leads',
        'DOI emails available',
      ],
    },
    {
      id: 3,
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'User Agent Data',
      color: 'from-teal-500 to-teal-600',
      description: 'Real user agent data for your projects',
      features: [
        '5K sheet - $10',
        'Real user agents lifetime (all tools) - $20',
        'Regular updates',
        'Multiple device types',
      ],
    },
    {
      id: 4,
      icon: <Layout className="w-8 h-8" />,
      title: 'Landing Pages',
      color: 'from-green-500 to-green-600',
      description: 'Professional landing pages ready to convert',
      features: [
        'With domain & hosting - $15 (800+ designs)',
        'Without domain & hosting - $12 (500+ designs)',
        'Mobile responsive',
        'Fast loading times',
      ],
    },
    {
      id: 5,
      icon: <Building2 className="w-8 h-8" />,
      title: 'CPA Networks',
      color: 'from-emerald-500 to-emerald-600',
      description: 'Verified CPA network accounts',
      features: [
        'OGAds, CrackRevenue - $10',
        'AdBlueMedia, AffRoyal - $25',
        'MaxBounty, SolidQube - $80',
        'Custom network accounts available',
      ],
    },
    {
      id: 6,
      icon: <Server className="w-8 h-8" />,
      title: 'RDPs',
      color: 'from-sky-500 to-sky-600',
      description: 'Remote desktop protocol servers',
      features: [
        'High-speed connections',
        'Multiple locations',
        'Dedicated resources',
        'Flexible plans',
      ],
    },
    {
      id: 7,
      icon: <Chrome className="w-8 h-8" />,
      title: 'CPA Browsers',
      color: 'from-blue-600 to-blue-700',
      description: 'Specialized browsers for CPA marketing',
      features: [
        '$1 for 35 days',
        'Anti-detection features',
        'Multiple profiles',
        'Regular updates',
      ],
    },
    {
      id: 8,
      icon: <UserCircle className="w-8 h-8" />,
      title: 'US Accounts',
      color: 'from-violet-500 to-violet-600',
      description: 'Personal and business account services',
      features: [
        'Personal accounts',
        'Business accounts',
        'Verified profiles',
        'Full documentation',
      ],
    },
    {
      id: 9,
      icon: <UserCircle className="w-8 h-8" />,
      title: 'Pakistani Accounts',
      color: 'from-pink-500 to-pink-600',
      description: 'Pakistani account services',
      features: [
        'Local accounts',
        'Business accounts',
        'Payment solutions',
        'Full support',
      ],
    },
    {
      id: 10,
      icon: <Youtube className="w-8 h-8" />,
      title: 'YouTube Services',
      color: 'from-red-500 to-red-600',
      description: 'Monetized channels and watch time',
      features: [
        'Monetized channels (buy/sell)',
        'Watch time packages',
        'Subscriber growth',
        'Engagement services',
      ],
    },
    {
      id: 11,
      icon: <Shield className="w-8 h-8" />,
      title: 'KYC Tools',
      color: 'from-orange-500 to-orange-600',
      description: 'Identity verification tools',
      features: [
        'Deep fake image generation',
        'Document verification',
        'Secure processing',
        'Multiple formats supported',
      ],
    },
    {
      id: 12,
      icon: <Wrench className="w-8 h-8" />,
      title: 'CPA Automation',
      color: 'from-amber-500 to-amber-600',
      description: 'Automation tools for CPA campaigns',
      features: [
        'Coming soon',
        'Campaign automation',
        'Analytics & reporting',
        'Multi-platform support',
      ],
    },
    {
      id: 13,
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Currency Exchange',
      color: 'from-lime-500 to-lime-600',
      description: 'Multiple currency exchange services',
      features: [
        'INR to USD / USD to INR',
        'INR to PKR / PKR to INR',
        'PKR to USD / USD to PKR',
        'Competitive rates',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive CPA marketing solutions designed to help you succeed.
            Choose from our 13 premium services tailored for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`mt-8 w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  Learn More
                </button>
              </div>

              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Need a Custom Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer customized solutions for your specific needs. Contact us to discuss your requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
