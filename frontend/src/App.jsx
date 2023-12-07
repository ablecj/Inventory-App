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
import CustomerAccount from './Inventory Pages/CustomerAccount';
import VendorAccount from './Inventory Pages/VendorAccount';
import InventoryItems from './Inventory Pages/InventoryItems';
import DamageItems from './Inventory Pages/DamageItems';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/billing-page' element={<BillingPage />} />
        <Route path='/inventory' element={<InventoryPage />} />
        {/* inventory pages  */}
        <Route path='/purchase-bill' element={<PurchaseBillUpdate />} />
        <Route path='/customer-Account' element={<CustomerAccount />} />
        <Route path='/vendor-account' element={<VendorAccount />} />
        <Route path='/inventory-items' element={<InventoryItems />} />
        <Route path='/damage-items' element={<DamageItems />} />
      </Routes>
    </div>
  );
};

export default App;
