import { Link } from 'react-router-dom';
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
  ArrowRight,
  Sparkles,
  Zap,
  Target,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Setup',
      description: 'Get started with our services in minutes',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Top-notch security for all transactions',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Premium Quality',
      description: 'High-quality services for maximum results',
    },
  ];

  const serviceHighlights = [
    { icon: <Globe className="w-8 h-8" />, name: 'Proxies', color: 'from-blue-500 to-blue-600' },
    { icon: <Users className="w-8 h-8" />, name: 'Leads', color: 'from-cyan-500 to-cyan-600' },
    { icon: <Layout className="w-8 h-8" />, name: 'Landing Pages', color: 'from-teal-500 to-teal-600' },
    { icon: <Building2 className="w-8 h-8" />, name: 'CPA Networks', color: 'from-green-500 to-green-600' },
    { icon: <Server className="w-8 h-8" />, name: 'RDPs', color: 'from-emerald-500 to-emerald-600' },
    { icon: <Chrome className="w-8 h-8" />, name: 'Browsers', color: 'from-sky-500 to-sky-600' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fadeIn">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium CPA Marketing Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Supercharge Your
              </span>
              <br />
              <span className="text-gray-900">CPA Marketing</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp animation-delay-200">
              Everything you need for successful CPA marketing campaigns. From proxies and leads
              to landing pages and automation tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              13+ premium services to power your CPA marketing success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <p className="text-center font-semibold text-gray-900">{service.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Boost Your CPA Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get access to premium tools and services. Contact us today to get started.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
