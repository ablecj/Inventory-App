// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// eslint-disable-next-line no-unused-vars
import DefaultLayout from './components/DefaultLayout';
import BillingPage from './pages/BillingPage';
import InventoryPage from './pages/InventoryPage';
import PurchaseBillUpdate from './Inventory Pages/PurchaseBillUpdate';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/billing-page' element={<BillingPage />} />
        <Route path='/inventory' element={<InventoryPage />} />
        {/* inventory pages  */}
        <Route path='/purchase-bill' element={<PurchaseBillUpdate />} />
      </Routes>
    </div>
  );
};

export default App;
