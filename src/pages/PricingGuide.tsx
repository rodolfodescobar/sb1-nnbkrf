import React from 'react';
import { DollarSign, Clock, Users, Zap } from 'lucide-react';

const services = [
  {
    name: 'SEO Package',
    description: 'Comprehensive SEO optimization for better rankings',
    price: 1500,
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Content Strategy',
      'Monthly Reports',
    ],
    icon: Zap,
  },
  {
    name: 'Social Media Management',
    description: 'Full-service social media marketing and management',
    price: 1000,
    features: [
      'Content Creation',
      'Community Management',
      'Analytics Reports',
      'Ad Campaign Management',
    ],
    icon: Users,
  },
  {
    name: 'PPC Management',
    description: 'Results-driven paid advertising campaigns',
    price: 2000,
    features: [
      'Campaign Setup',
      'Keyword Research',
      'A/B Testing',
      'ROI Tracking',
    ],
    icon: DollarSign,
  },
  {
    name: 'Content Marketing',
    description: 'Strategic content creation and distribution',
    price: 1200,
    features: [
      'Blog Posts',
      'Email Newsletters',
      'Social Media Content',
      'Content Calendar',
    ],
    icon: Clock,
  },
];

export default function PricingGuide() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Pricing Guide</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-blue-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${service.price}</span>
              <span className="text-gray-600">/month</span>
            </div>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}