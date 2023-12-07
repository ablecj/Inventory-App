// eslint-disable-next-line no-unused-vars
import React from "react";
import InventoryLayout from "../components/InventoryLayout";
import "../styles/vendoraccount.css";
import { Button, Input } from "antd";

const VendorAccount = () => {
  // addng new vendor account
  const handleNewVendor = (value) => {
    console.log("add new vendor", value);
  };

  return (
    <InventoryLayout>
      <div className="vendor-container">
        <div className="vendor-heading">
          <h4>Vendor Account</h4>
        </div>
        <div className="vendor-content">
          <div className="input-container">
            <div className="input-item">
              <label htmlFor="name">Name:</label>
              <Input id="name" placeholder="Name" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="place">Place:</label>
              <Input id="place" placeholder="Place" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="address">Address:</label>
              <Input id="address" placeholder="Address" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="pincode">Pincode:</label>
              <Input id="pincode" placeholder="Pincode" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="contactNo">Contact No:</label>
              <Input id="contactNo" placeholder="Contact No" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="phone">Phone:</label>
              <Input id="phone" placeholder="Phone" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="website">Website:</label>
              <Input id="website" placeholder="Website" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="taxDetails">Tax Details:</label>
              <Input id="taxDetails" placeholder="Tax Details" maxLength={50} />
            </div>
            <div className="input-item">
              <label htmlFor="oldBalance">Old Balance:</label>
              <Input id="oldBalance" placeholder="Old Balance" maxLength={50} />
            </div>
          </div>

          <div  className="invetory-popup-btn">
            <Button onClick={handleNewVendor} type="primary">
              Add
            </Button>
          </div>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default VendorAccount;
