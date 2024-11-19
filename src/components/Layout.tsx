import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Tags,
  Settings as SettingsIcon,
  LogOut,
} from 'lucide-react';

export default function Layout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/fulfillment', icon: Users, label: 'Fulfillment Center' },
    { to: '/vendors', icon: ShoppingBag, label: 'Preferred Vendors' },
    { to: '/pricing', icon: Tags, label: 'Pricing Guide' },
    { to: '/settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Client Portal</h1>
        </div>
        
        <div className="mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  isActive ? 'bg-blue-50 text-blue-600' : ''
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="absolute bottom-8 left-6 right-6 flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </nav>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}