import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FulfillmentCenter from './pages/FulfillmentCenter';
import PreferredVendors from './pages/PreferredVendors';
import PricingGuide from './pages/PricingGuide';
import Settings from './pages/Settings';
import Layout from './components/Layout';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        
        {isAuthenticated ? (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fulfillment" element={<FulfillmentCenter />} />
            <Route path="/vendors" element={<PreferredVendors />} />
            <Route path="/pricing" element={<PricingGuide />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;