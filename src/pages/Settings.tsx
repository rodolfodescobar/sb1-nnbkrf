import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    agencyName: 'Digital Marketing Pro',
    website: 'https://www.example.com',
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the settings to a backend here
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Agency Settings</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Agency Name</label>
            <input
              type="text"
              value={settings.agencyName}
              onChange={(e) => setSettings({ ...settings, agencyName: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="url"
              value={settings.website}
              onChange={(e) => setSettings({ ...settings, website: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Agency Email</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}