import React from 'react';
import { ExternalLink } from 'lucide-react';

const mockVendors = [
  {
    name: 'SEMrush',
    description: 'All-in-one digital marketing suite',
    category: 'SEO Tools',
    affiliateLink: 'https://www.semrush.com/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Mailchimp',
    description: 'Email marketing platform',
    category: 'Email Marketing',
    affiliateLink: 'https://mailchimp.com/',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Canva',
    description: 'Design platform for social media',
    category: 'Design Tools',
    affiliateLink: 'https://www.canva.com/',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=300&q=80',
  },
];

export default function PreferredVendors() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Preferred Vendors</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Vendor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVendors.map((vendor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {vendor.category}
                  </span>
                </div>
                <a
                  href={vendor.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-gray-600">{vendor.description}</p>
              <div className="mt-6">
                <a
                  href={vendor.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}