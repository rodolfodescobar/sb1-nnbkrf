import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockClients = [
  {
    id: 1,
    name: 'Acme Corp',
    services: ['SEO', 'Content Marketing'],
    nextBillDate: '2024-04-15',
    budget: 5000,
    notes: 'Monthly strategy meeting every first Monday',
  },
  {
    id: 2,
    name: 'TechStart Inc',
    services: ['PPC', 'Social Media'],
    nextBillDate: '2024-04-10',
    budget: 3500,
    notes: 'Focusing on LinkedIn campaigns',
  },
  {
    id: 3,
    name: 'Global Solutions',
    services: ['Email Marketing', 'SEO'],
    nextBillDate: '2024-04-20',
    budget: 4500,
    notes: 'New website launch in Q2',
  },
];

export default function FulfillmentCenter() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [currentNote, setCurrentNote] = useState('');

  const handleAddNote = () => {
    if (currentNote.trim()) {
      // In a real app, you would update the backend here
      setCurrentNote('');
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Fulfillment Center</h1>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
          {mockClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{client.name}</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {client.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Next Bill: {new Date(client.nextBillDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {selectedClient && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{selectedClient.name} Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Budget</p>
                  <p className="text-lg text-gray-900">${selectedClient.budget}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedClient.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Bill Date</p>
                  <p className="text-lg text-gray-900">
                    {new Date(selectedClient.nextBillDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{selectedClient.notes}</p>
                </div>
                <div className="space-y-2">
                  <textarea
                    value={currentNote}
                    onChange={(e) => setCurrentNote(e.target.value)}
                    placeholder="Add a new note..."
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={handleAddNote}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}