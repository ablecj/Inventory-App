// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import InventoryLayout from "../components/InventoryLayout";
import InventoryPopup from "../components/InventoryPopup";
import ScodePopup from "../components/ScodePopup";
import BarcodePopup from "../components/BarcodePopup";

const InventoryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonCick = () => {
    setIsOpen(true);
  };

  // for closeing thwe model
  const closeModal = () => {
    console.log("pop up closed");
    setIsOpen(false);
  };
// useState for Scode  pop up 
const [scodeOpen, setScodeOpen] = useState(false);

  const handleScode = ()=>{
    setScodeOpen(true);
  }
  // function for close popup
  const closeScode = ()=>{
    console.log("Scode pop up closed !")
    setScodeOpen(false)
  }

  // state for Barcode  pop up
  const [barcodeOpen, setBarcodeOpen] = useState(false);

  // barcode button click function
  const handleBarcode = ()=>{
    setBarcodeOpen(true);
  }
// close barcode function
  const closeBarcode = ()=>{
    setBarcodeOpen(false)
  }
  return (
    <InventoryLayout>
      <div className="layout-container">
        <h4 className="inventory-heading">Inventory Update</h4>
        <div className="layout-Content">
          <div className="button-container">
            <div className="inventory-button">
            <button  onClick={handleButtonCick}>
              Create Inventory Catagory
            </button>
            </div>          
            <div className="add-new-btn-top">
            <button>Add New Item</button>
            </div>
            <div className="scode">
            <button onClick={handleScode}>Scode</button>
            </div>
            <div className="barcode">
            <button onClick={handleBarcode}>Barcode</button>
            </div>
          </div>
          <InventoryPopup modelOpen={isOpen} closeModal={closeModal} />
          <ScodePopup scodeOpen={scodeOpen} closeScode={closeScode} />
          <BarcodePopup barcodeOpen={barcodeOpen} closeBarcode={closeBarcode} />
          <div className="layout-section">
            <div className="inventory-input">
              <input type="text" placeholder="Category" maxLength="20" />

              <input type="text" placeholder="Item Name" maxLength="20" />

              <input type="text" placeholder="Old quantity" maxLength="20" />

              <input type="text" placeholder="Quantity" maxLength="20" />

              <input type="text" placeholder="Barcode" maxLength="20" />

              <input type="text" placeholder="Scode" maxLength="20" />

              <input type="text" placeholder="Purchase Price" maxLength="20" />

              <input type="text" placeholder="Selling price" maxLength="20" />

              <input type="text" placeholder="Unit" maxLength="20" />

              <input type="text" placeholder="Discount Amount" maxLength="20" />

              <input type="text" placeholder="Vendor Name" maxLength="20" />
              <button className="inventory-btn-add">Add</button>
              <div className="add-new-item-div">
              <button className="add-new-item-btn">
              Item not exist <br /> Add new item
             </button>
             </div>
            </div>
   
          </div>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default InventoryPage;
